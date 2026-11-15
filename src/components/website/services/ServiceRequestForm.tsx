"use client";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Send,
  Trash2,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Link, useRouter } from "@/i18n/navigation";
import { serviceGroups, type ServiceId } from "@/data/service-groups";
import { submitServiceRequest } from "@/lib/web3forms";
import type { ServiceRequestFormValues } from "@/types/website";
import { useLocale, useTranslations } from "next-intl";

type ServiceOption = (typeof serviceGroups)[number]["services"][number];

const serviceOptions: ServiceOption[] = [];
for (const group of serviceGroups) {
  serviceOptions.push(...group.services);
}
const validServiceIds = new Set<string>(
  serviceOptions.map((service) => service.id)
);

function isServiceId(value: string): value is ServiceId {
  return validServiceIds.has(value);
}

const inputClassName =
  "w-full rounded-lg border border-white/15 bg-(--color-background)/70 px-4 py-3 text-(--color-text) outline-none transition placeholder:text-(--color-secondary-text)/60 focus:border-(--color-accent) focus:ring-2 focus:ring-(--color-accent)/20";

export default function ServiceRequestForm() {

  const locale = useLocale() === "en" ? "en" : "ar";
  const searchParams = useSearchParams();
  const router = useRouter();
  const botcheckRef = useRef<HTMLInputElement>(null);
  const selectedIds = Array.from(
    new Set(searchParams.getAll("service").filter(isServiceId))
  );
  const selectedServices = serviceOptions.filter((service) =>
    selectedIds.includes(service.id)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = useTranslations("Services.request");

  const removeService = (serviceId: ServiceId) => {
    const query = new URLSearchParams();
    selectedIds
      .filter((selectedId) => selectedId !== serviceId)
      .forEach((selectedId) => query.append("service", selectedId));
    router.replace(`/services/request?${query.toString()}`, { scroll: false });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");

    if (selectedServices.length === 0) {
      setSubmissionError(t("selectAtLeastOne"));
      return;
    }

    const formData = new FormData(event.currentTarget);
    const readValue = (key: string) => {
      const value = formData.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const values: ServiceRequestFormValues = {
      name: readValue("name"),
      email: readValue("email"),
      phone: readValue("phone"),
      businessName: readValue("businessName"),
      businessType: readValue("businessType"),
      city: readValue("city"),
      profileUrl: readValue("profileUrl"),
      details: readValue("details"),
    };

    setIsSubmitting(true);
    try {
      const result = await submitServiceRequest(
        values,
        selectedServices.map((service) => service.title[locale]),
        botcheckRef.current?.value ?? ""
      );

      if (!result.success) {
        setSubmissionError(
          result.reason === "not-configured"
            ? t("unavailable")
            : t("submitError")
        );
        return;
      }

      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      aria-labelledby="service-request-title"
      className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-(--color-accent)/25 bg-(--color-surface)/70 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      <div className="border-b border-white/10 px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
            <Building2 aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h1
              id="service-request-title"
              className="font-alexandria text-lg font-bold sm:text-xl"
            >
              {t("title")}
            </h1>
            <p className="mt-1 text-sm text-(--color-secondary-text)">
              {t("description")}
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 px-5 py-6 sm:px-8 sm:py-8"
      >
        <input
          ref={botcheckRef}
          type="text"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
        />

        <fieldset className="rounded-lg border border-white/10 p-4">
          <legend className="px-2 text-sm font-semibold text-(--color-secondary-text)">
            {t("selectedServices")}
          </legend>
          {selectedServices.length > 0 ? (
            <ul className="flex flex-wrap gap-5">
              {selectedServices.map((service) => (
                <li
                  key={service.id}
                  className="relative flex items-center rounded-md border border-(--color-accent)/25 bg-(--color-accent)/10 px-4 py-2 text-sm text-(--color-accent)"
                >
                  {service.title[locale]}
                  {selectedServices.length > 1 && (
                    <button
                      type="button"
                      aria-label={t("removeService", { service: service.title[locale] })}
                      onClick={() => removeService(service.id)}
                      className="cursor-pointer absolute -right-3.5 -top-3.5 z-10 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-(--color-accent)/30 bg-(--color-background) text-(--color-secondary-text) shadow-md transition hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
                    >
                      <Trash2 aria-hidden="true" className="size-3" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-7 text-(--color-secondary-text)">
              {t("noServiceSelected")}{" "}
              <Link
                href="/services#services"
                className="font-semibold text-(--color-accent) underline underline-offset-4"
              >
                {t("backToServices")}
              </Link>
            </p>
          )}
        </fieldset>

        {submissionError && (
          <p
            role="alert"
            className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-200"
          >
            {submissionError}
          </p>
        )}
        {isSubmitted && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-100"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-1 size-4 shrink-0"
            />
            {t("success")}
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="service-request-name"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("name")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder={t("namePlaceholder")}
              className={inputClassName}
            />
          </div>
          <div>
            <label
              htmlFor="service-request-email"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("email")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              dir="ltr"
              placeholder={t("emailPlaceholder")}
              className={`${inputClassName} text-left`}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="service-request-phone"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("phone")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-phone"
              name="phone"
              type="tel"
              required
              maxLength={30}
              autoComplete="tel"
              dir="ltr"
              placeholder={t("phonePlaceholder")}
              className={`${inputClassName} text-left`}
            />
          </div>
          <div>
            <label
              htmlFor="service-request-business"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("businessName")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-business"
              name="businessName"
              type="text"
              required
              maxLength={150}
              autoComplete="organization"
              placeholder={t("businessNamePlaceholder")}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="service-request-business-type"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("businessType")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-business-type"
              name="businessType"
              type="text"
              required
              maxLength={100}
              placeholder={t("businessTypePlaceholder")}
              className={inputClassName}
            />
          </div>
          <div>
            <label
              htmlFor="service-request-city"
              className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
            >
              {t("city")} <span className="text-(--color-accent)">*</span>
            </label>
            <input
              id="service-request-city"
              name="city"
              type="text"
              required
              maxLength={100}
              autoComplete="address-level2"
              placeholder={t("cityPlaceholder")}
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service-request-profile"
            className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
          >
            {t("googleBusinessUrl")}
          </label>
          <input
            id="service-request-profile"
            name="profileUrl"
            type="url"
            maxLength={2000}
            dir="ltr"
            placeholder={t("googleBusinessUrlPlaceholder")}
            className={`${inputClassName} text-left`}
          />
        </div>

        <div>
          <label
            htmlFor="service-request-details"
            className="mb-2 block text-sm font-medium text-(--color-secondary-text)"
          >
            {t("additionalDetails")}
          </label>
          <textarea
            id="service-request-details"
            name="details"
            rows={4}
            maxLength={2000}
            placeholder={t("detailsPlaceholder")}
            className={`${inputClassName} resize-y leading-7`}
          />
        </div>

        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted || selectedServices.length === 0}
            className="cursor-pointer discoveryButton discoveryButton-colors relative inline-flex min-h-12 min-w-38.75 items-center justify-center gap-2 rounded-[10px] px-2 py-3 text-sm font-semibold text-(--color-text) transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:py-2"
          >
            <Send aria-hidden="true" className="size-4" />
            {isSubmitting
              ? <span>{t("submitting")}</span>
              : isSubmitted
                ? <span>{t("submitted")}</span>
                : <span>{t("submit")}</span>}
          </button>
          <Link
            href="/services#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-secondary-text) transition hover:text-(--color-accent)"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
            {t("backToServiceSelection")}
          </Link>
        </div>
      </form>
    </section>
  );
}
