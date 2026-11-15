"use client";

import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { countries } from "@/constants/countries";
import { countryDialCodes } from "@/constants/countryDialCodes";
import { submitVisitRequest } from "@/lib/web3forms";
import type {
  VisitRequestFieldErrors,
  VisitRequestFormValues,
} from "@/types/website";
import {
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  User,
  X,
} from "lucide-react";

const defaultCountry = "المملكة العربية السعودية";
const defaultPhoneCode =
  countryDialCodes.find(({ country }) => country === defaultCountry)?.code ??
  "";

const countryFlags: Record<string, string> = {
  "المملكة العربية السعودية": "🇸🇦",
  مصر: "🇪🇬",
  تركيا: "🇹🇷",
  جورجيا: "🇬🇪",
};

const getCountryFlag = (country: string) => countryFlags[country] ?? "🌐";

const initialForm: VisitRequestFormValues = {
  name: "",
  phoneCode: defaultPhoneCode,
  phoneNumber: "",
  email: "",
  country: defaultCountry,
  city: "",
  details: "",
};

export default function RequestVisitPage() {
  const locale = useLocale();
  const formLocale = locale === "en" ? "en" : "ar";
  const messages = useMessages();
  const t = useTranslations("VisitRequest");
  const tForm = useTranslations("VisitRequest.form");
  const tValidation = useTranslations("VisitRequest.validation");
  const tSubmission = useTranslations("VisitRequest.submission");
  const localizedCountries = Object.values(messages.Countries);
  const [form, setForm] = useState<VisitRequestFormValues>(initialForm);
  const [errors, setErrors] = useState<VisitRequestFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [acceptedVisitTerms, setAcceptedVisitTerms] = useState(false);
  const [visitTermsError, setVisitTermsError] = useState("");
  const botcheckRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      if (name === "country") {
        const phoneCode =
          countryDialCodes.find(({ country }) => country === value)?.code ??
          "";

        return { ...prev, country: value, phoneCode };
      }

      return { ...prev, [name]: value };
    });
    if (errors[name as keyof VisitRequestFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next: VisitRequestFieldErrors = {};

    if (!form.name.trim()) next.name = tValidation("nameRequired");
    if (!form.phoneCode.trim()) next.phoneCode = tValidation("phoneCodeRequired");
    if (!form.phoneNumber.trim()) next.phoneNumber = tValidation("phoneRequired");
    else if (!/^[\d\s()-]{6,20}$/.test(form.phoneNumber.trim()))
      next.phoneNumber = tValidation("phoneInvalid");

    if (!form.email.trim()) next.email = tValidation("emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = tValidation("emailInvalid");

    if (!form.country.trim()) next.country = tValidation("countryRequired");
    if (!form.city.trim()) next.city = tValidation("cityRequired");
    if (!form.details.trim()) next.details = tValidation("detailsRequired");
    else if (form.details.trim().length < 15)
      next.details = tValidation("detailsTooShort");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isFormValid = validate();

    if (!acceptedVisitTerms) {
      setVisitTermsError(tValidation("termsRequired"));
    } else {
      setVisitTermsError("");
    }

    if (!isFormValid || !acceptedVisitTerms) return;

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const result = await submitVisitRequest(
        form,
        botcheckRef.current?.value ?? "",
        formLocale
      );

      if (!result.success) {
        setSubmissionError(
          result.reason === "not-configured"
            ? tSubmission("unavailable")
            : tSubmission("error")
        );
        return;
      }

      setShowSuccess(true);
      setForm(initialForm);
      setAcceptedVisitTerms(false);
      setVisitTermsError("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccess = () => setShowSuccess(false);

  const fieldClass =
    "w-full rounded-2xl border border-(--color-accent)/25 bg-(--color-background)/70 px-4 py-3 text-(--color-text) outline-none transition placeholder:text-(--color-secondary-text)/60 focus:border-(--color-accent) focus:ring-2 focus:ring-(--color-accent)/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-(--color-secondary-text)";

  return (
    <div
      dir={locale}
      lang={locale}
      className="relative min-h-[70vh] overflow-hidden bg-(--color-background) text-(--color-text)"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_65%)]" />

      <section className="relative mx-auto max-w-[1280px] py-12  lg:py-16">
        {/* Desktop: 2 columns | Mobile: 1 column */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Intro column */}
          <div className="text-center lg:sticky lg:top-28 lg:text-start">
            <p className="text-sm font-medium tracking-[0.25em] text-(--color-accent) sm:text-base">
              {t("eyebrow")}
            </p>
            <h1 className="font-alexandria mt-4 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-(--color-secondary-text) sm:text-lg lg:mx-0">
              {t("description")}
            </p>
            <ul className="mx-auto mt-8 hidden max-w-md space-y-4 text-start text-(--color-secondary-text) lg:mx-0 lg:block">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-(--color-accent)" />
                <span>{t("benefits.authenticReview")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-(--color-accent)" />
                <span>{t("benefits.improvement")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-(--color-accent)" />
                <span>{t("benefits.quickResponse")}</span>
              </li>
            </ul>
          </div>

          {/* Form column */}
          <div className="overflow-hidden rounded-[30px] border border-(--color-accent)/35 bg-(--color-surface)/60 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="border-b border-(--color-accent)/20 bg-(--color-background)/40 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
                  <Send className="size-5" />
                </span>
                <div>
                  <h2 className="font-alexandria text-xl font-bold text-(--color-accent)">
                    {tForm("title")}
                  </h2>
                  <p className="mt-1 text-sm text-(--color-secondary-text)">
                    {tForm("requiredFields")}
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-8">
              <input
                ref={botcheckRef}
                type="text"
                name="botcheck"
                tabIndex={-1}
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <User className="size-4 text-(--color-accent)" />
                      {tForm("name")}
                    </span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tForm("namePlaceholder")}
                    className={fieldClass}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="size-4 text-(--color-accent)" />
                      {tForm("phone")}
                    </span>
                  </label>
                  <div className="flex gap-2 relative" dir="ltr">
                    <select
                      id="phoneCode"
                      name="phoneCode"
                      value={form.phoneCode}
                      onChange={handleChange}
                      aria-label={tForm("phoneCode")}
                      className={`${fieldClass} max-w-24 focus:border-none! focus:outline-none! focus:ring-0! focus-visible:outline-none bg-none! ps-1! pe-0! py-2! top-1 ms-1 border-0  absolute shrink-0 cursor-pointer  text-left`}
                    >
                      <option value="">{tForm("phoneCode")}</option>
                      {countryDialCodes.map(({ country, code }) => (
                        <option key={`${country}-${code}`} value={code}>
                          {getCountryFlag(country)} {code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      placeholder="5X XXX XXXX"
                      className={`${fieldClass} ps-26  min-w-0 flex-1 text-left`}
                      autoComplete="tel-national"
                    />
                  </div>
                  {errors.phoneCode && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phoneCode}
                    </p>
                  )}
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="size-4 text-(--color-accent)" />
                    {tForm("email")}
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={tForm("emailPlaceholder")}
                  className={`${fieldClass} text-left`}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <Building2 className="size-4 text-(--color-accent)" />
                      {tForm("country")}
                    </span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    <option value="">{tForm("chooseCountry")}</option>
                    {countries.map((c, index) => (
                      <option key={c} value={c}>
                        {localizedCountries[index] ?? c}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-red-400">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className={labelClass}>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4 text-(--color-accent)" />
                      {tForm("city")}
                    </span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.city}
                    onChange={handleChange}
                    placeholder={tForm("cityPlaceholder")}
                    className={fieldClass}
                    autoComplete="address-level2"
                  />
                  {errors.city && (
                    <p className="mt-2 text-sm text-red-400">{errors.city}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="details" className={labelClass}>
                  {tForm("details")}
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  value={form.details}
                  onChange={handleChange}
                  placeholder={tForm("detailsPlaceholder")}
                  className={`${fieldClass} min-h-[140px] resize-y`}
                />
                {errors.details && (
                  <p className="mt-2 text-sm text-red-400">{errors.details}</p>
                )}
              </div>

              <section
                aria-labelledby="visit-terms-title"
                className="rounded-2xl border border-(--color-accent)/25 bg-(--color-background)/45 p-4 sm:p-5"
              >
                <h3
                  id="visit-terms-title"
                  className="font-alexandria text-base font-bold text-(--color-accent)"
                >
                  {tForm("termsTitle")}
                </h3>

                <ul className="mt-3 space-y-2 text-sm leading-7 text-(--color-secondary-text)">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>
                      {tForm("terms.independent")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>
                      {tForm("terms.consultation")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>
                      {tForm("terms.freeVisit")}
                    </span>
                  </li>
                </ul>

                <div className="mt-4 border-t border-(--color-accent)/15 pt-4">
                  <label
                    htmlFor="acceptVisitTerms"
                    className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-(--color-text)"
                  >
                    <input
                      id="acceptVisitTerms"
                      name="acceptVisitTerms"
                      type="checkbox"
                      checked={acceptedVisitTerms}
                      onChange={(event) => {
                        setAcceptedVisitTerms(event.target.checked);
                        if (event.target.checked) setVisitTermsError("");
                      }}
                      aria-required="true"
                      aria-invalid={visitTermsError ? true : undefined}
                      aria-describedby={
                        visitTermsError ? "visit-terms-error" : undefined
                      }
                      className="mt-1 size-4 shrink-0 cursor-pointer accent-(--color-accent)"
                    />
                    <span>{tForm("acceptTerms")}</span>
                  </label>
                  {visitTermsError ? (
                    <p
                      id="visit-terms-error"
                      role="alert"
                      className="mt-2 text-sm text-red-400"
                    >
                      {visitTermsError}
                    </p>
                  ) : null}
                </div>
              </section>

              <div className="pt-2">
                {submissionError && (
                  <p role="alert" className="mb-4 text-sm leading-7 text-red-400">
                    {submissionError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl border border-(--color-accent)/60 px-4 py-1 text-base font-bold text-[#08111f] shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-50"
                >
                  <div
                    className="absolute inset-0 rounded-[14px] bg-[linear-gradient(135deg,#3d2a10_0%,#8d6323_18%,#f5d17a_34%,#7e571f_48%,#3c2810_65%,#f4ca71_83%,#5d4017_100%)] transition-all duration-500 group-hover:brightness-110"
                    style={{ padding: "1px" }}
                  >
                    <div className="h-full w-full rounded-xl" />
                  </div>

                  <div className="absolute inset-0 rounded-[14px] opacity-70 shadow-[0_0_25px_rgba(255,184,61,.15)] transition-all duration-500 group-hover:shadow-[0_0_34px_rgba(243,193,92,.22)]" />

                  <div className="absolute inset-0.5 rounded-xl bg-[radial-gradient(circle_at_50%_30%,#27231b_10%,#171717_55%,#0c0c0c_100%)]" />

                  <div
                    className="pointer-events-none absolute inset-0.5 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(180px circle at var(--x) var(--y), rgba(243,193,92,.18), transparent 65%)",
                    }}
                  />

                  <div className="absolute inset-0.5 rounded-xl shadow-[inset_0_2px_5px_rgba(255,255,255,.06),inset_0_-5px_12px_rgba(0,0,0,.8)]" />

                  <span className="relative z-20 flex items-center justify-center gap-2 px-5 py-2 text-base font-bold text-(--color-text) drop-shadow-[0_0_6px_rgba(255,199,94,.35)] transition-all duration-300">
                    {isSubmitting ? (
                      <span>{tForm("submitting")}</span>
                    ) : (
                      <>
                        <span>{tForm("submit")}</span>
                        <Send className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-[-2px]" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={closeSuccess}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-(--color-accent)/40 bg-(--color-surface) p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeSuccess}
              aria-label={t("form.successClose")}
              className="absolute start-4 top-4 rounded-full border border-white/10 p-2 text-(--color-secondary-text) transition hover:border-(--color-accent)/40 hover:text-(--color-accent)"
            >
              <X className="size-5" />
            </button>

            <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-(--color-accent)/40 bg-(--color-accent)/10 text-(--color-accent)">
              <CheckCircle2 className="size-9" />
            </div>

            <h3
              id="success-title"
              className="font-alexandria mt-6 text-2xl font-bold text-(--color-accent)"
            >
              {tForm("successTitle")}
            </h3>
            <p className="mt-4 text-base leading-8 text-(--color-secondary-text)">
              {tForm("successMessage")}
            </p>

            <button
              type="button"
              onClick={closeSuccess}
              className="mt-8 inline-flex rounded-2xl border border-(--color-accent)/50 bg-(--color-accent)/15 px-6 py-3 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/25"
            >
              {tForm("successClose")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}