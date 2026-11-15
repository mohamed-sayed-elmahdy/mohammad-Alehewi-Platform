import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const messagesDirectory = new URL("../src/messages/", import.meta.url);
const locales = ["ar", "en"];

async function loadMessages(locale) {
  const fileUrl = new URL(`${locale}.json`, messagesDirectory);
  const content = await readFile(fileUrl, "utf8");

  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Invalid JSON in ${fileURLToPath(fileUrl)}: ${error.message}`,
    );
  }
}

function collectLeaves(value, prefix = "", result = new Map()) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    result.set(prefix, value);
    return result;
  }

  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    collectLeaves(child, path, result);
  }

  return result;
}

function validateMessages(locale, messages) {
  const errors = [];
  for (const [key, value] of collectLeaves(messages)) {
    if (typeof value !== "string") {
      errors.push(`${locale}: "${key}" must have a string value`);
    } else if (!value.trim()) {
      errors.push(`${locale}: "${key}" must not be empty`);
    }
  }
  return errors;
}

const catalogs = Object.fromEntries(
  await Promise.all(locales.map(async (locale) => [locale, await loadMessages(locale)])),
);
const leaves = Object.fromEntries(
  locales.map((locale) => [locale, collectLeaves(catalogs[locale])]),
);
const errors = locales.flatMap((locale) =>
  validateMessages(locale, catalogs[locale]),
);

for (const key of leaves.ar.keys()) {
  if (!leaves.en.has(key)) {
    errors.push(`en: missing key "${key}"`);
  }
}

for (const key of leaves.en.keys()) {
  if (!leaves.ar.has(key)) {
    errors.push(`ar: missing key "${key}"`);
  }
}

if (errors.length > 0) {
  console.error("Locale message catalogs are inconsistent:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Locale message catalogs match (${leaves.ar.size} message keys).`);
}
