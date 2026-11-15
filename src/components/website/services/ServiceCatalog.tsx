"use client";

import GoldActionLink from "@/components/shared/GoldActionLink";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowLeft,
  Monitor,
  Palette,
  Camera,
  FileCheck2,
  MessageCircle,
  PenTool,
  SearchCheck,
  ShieldCheck,
  Store,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { serviceGroups, type ServiceId } from "@/data/service-groups";

const serviceIcons: Record<string, LucideIcon> = {
  Camera,
  FileCheck2,
  MessageCircle,
  Monitor,
  Palette,
  PenTool,
  SearchCheck,
  ShieldCheck,
  Store,
};

export default function ServiceCatalog() {
  const locale = useLocale() === "en" ? "en" : "ar";
  const t = useTranslations("Services.catalog");
  const [selectedIds, setSelectedIds] = useState<Set<ServiceId>>(new Set());
  const selectedServices = serviceGroups.flatMap((group) =>
    group.services.filter((service) => selectedIds.has(service.id))
  );

  const toggleService = (serviceId: ServiceId) => {
    setSelectedIds((current) => {
      const next = new Set(current);
      if (next.has(serviceId)) next.delete(serviceId);
      else next.add(serviceId);
      return next;
    });
  };

  const addGroup = (serviceIds: readonly ServiceId[]) => {
    setSelectedIds((current) => new Set([...current, ...serviceIds]));
  };

  const requestHref = (() => {
    const query = new URLSearchParams();
    selectedServices.forEach((service) => query.append("service", service.id));
    return `/services/request?${query.toString()}`;
  })();

  return (
    <>
      <section
        id="services"
        className="scroll-mt-16 border-y border-white/10 bg-white/2"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pb-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-3 text-sm font-semibold text-(--color-accent)">
                <span className="h-px w-8 bg-(--color-accent)" />
                {t("sectionTitle")}
              </p>
              <h2 className="font-alexandria mt-4 text-2xl font-bold leading-relaxed sm:text-3xl lg:text-4xl">
                {t("heading")}
              </h2>
              <p className="mt-3 max-w-xl leading-8 text-(--color-secondary-text)">
                {t("description")}
              </p>
            </div>
            <div className="flex w-fit items-center gap-3 rounded-lg border border-(--color-accent)/25 bg-(--color-accent)/5 px-4 py-2">
              <span className="font-alexandria text-2xl font-bold text-(--color-accent)">
                {serviceGroups.reduce(
                  (count, group) => count + group.services.length,
                  0
                )}
              </span>
              <span className="text-sm text-(--color-secondary-text)">
                {t("countLabel")}
              </span>
            </div>
          </div>

          <div className="mt-2">
            {serviceGroups.map((group) => {
              const GroupIcon = serviceIcons[group.icon];
              const groupServiceIds = group.services.map(
                (service) => service.id
              );

              return (
                <section
                  key={group.id}
                  aria-labelledby={`service-group-${group.id}`}
                  className="grid gap-5 border-b border-white/10 py-8 last:border-b-0 sm:py-10 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.8fr)] lg:gap-12 lg:py-12"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-lg border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
                        <GroupIcon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="font-alexandria text-base font-semibold tracking-[0.12em] text-(--color-accent)">
                        {group.number}
                      </span>
                      <h3
                        id={`service-group-${group.id}`}
                        className="font-alexandria text-lg font-bold leading-relaxed sm:text-xl"
                      >
                        {group.title[locale]}
                      </h3>
                    </div>
                    {group.services.length > 1 && (
                      <button
                        type="button"
                        onClick={() => addGroup(groupServiceIds)}
                        className="inline-flex min-h-10 items-center gap-2 rounded-md border border-(--color-accent)/35 px-3 py-2 text-sm font-semibold text-(--color-accent) transition-colors hover:bg-(--color-accent)/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent)"
                      >
                        {t("addGroup")}
                        <span className="text-xs">
                          ({group.services.length})
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="grid gap-3 sm:block">
                    {group.services.map((service) => {
                      const ServiceIcon = serviceIcons[service.icon];
                      const isSelected = selectedIds.has(service.id);

                      return (
                        <article
                          key={service.id}
                          className={`group grid grid-cols-[40px_minmax(0,1fr)] items-start gap-x-3 gap-y-3 rounded-lg border p-4 transition-colors sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-center sm:gap-x-5 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:px-4 sm:py-5 ${
                            isSelected
                              ? "border-(--color-accent)/50 bg-(--color-accent)/5 sm:bg-(--color-accent)/5"
                              : "border-white/10 bg-(--color-surface)/50 hover:border-(--color-accent)/30 hover:bg-(--color-surface) sm:border-white/20 sm:bg-transparent sm:hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="flex size-10 items-center justify-center rounded-lg border border-(--color-accent)/20 bg-(--color-accent)/10 text-(--color-accent) transition-colors group-hover:border-(--color-accent)/40 sm:size-11 sm:border-white/10 sm:bg-(--color-surface)/70 sm:group-hover:bg-(--color-accent)/10">
                            <ServiceIcon
                              aria-hidden="true"
                              className="size-5"
                            />
                          </span>
                          <div>
                            <h4 className="font-alexandria text-base font-semibold leading-7 sm:text-lg">
                              {service.title[locale]}
                            </h4>
                            <p className="mt-1 text-sm leading-7 text-(--color-secondary-text)">
                              {service.description[locale]}
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={
                              isSelected
                                ? t("removeServiceLabel", {
                                    service: service.title[locale],
                                  })
                                : t("addServiceLabel", {
                                    service: service.title[locale],
                                  })
                            }
                            onClick={() => toggleService(service.id)}
                            className="col-span-2 inline-flex min-h-10 w-full items-center justify-between rounded-md border-t border-white/10 pt-3 text-sm font-bold text-(--color-accent) transition-colors hover:text-[#e8c76a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) sm:col-span-1 sm:w-fit sm:justify-self-end sm:border-0 sm:py-1"
                          >
                            {isSelected ? (
                              <div className="flex items-center gap-1 cursor-pointer">
                                {t("removeService")}
                                <Trash2 aria-hidden="true" className="size-4" />
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 cursor-pointer">
                                {t("addService")}
                                <ArrowLeft
                                  aria-hidden="true"
                                  className="size-4 transition-transform ltr:rotate-180 rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1"
                                />
                              </div>
                            )}
                          </button>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {selectedServices.length > 0 && (
        <aside
          aria-label={t("selectedServices")}
          aria-live="polite"
          className="fixed inset-x-0 bottom-3 z-40 px-3"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-xl border border-(--color-accent)/30 bg-(--color-background)/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="font-semibold">
                {t("selectedCount", { count: selectedServices.length })}
              </p>
              <p className="mt-1 truncate text-sm text-(--color-secondary-text)">
                {selectedServices
                  .map((service) => service.title[locale])
                  .join(t("listSeparator"))}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedIds(new Set())}
                className="cursor-pointer text-sm font-semibold text-(--color-secondary-text) transition hover:text-(--color-text)"
              >
                {t("clearSelection")}
              </button>
              <GoldActionLink
                href={requestHref}
                className="min-h-11 w-auto px-4 py-2 text-sm font-bold"
              >
                {t("continueRequest")}
              </GoldActionLink>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
