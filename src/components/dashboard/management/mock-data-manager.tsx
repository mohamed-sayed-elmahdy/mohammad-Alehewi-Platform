"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Check,
  Eye,
  FilePlus2,
  Pencil,
  Search,
  Trash2,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type {
  DashboardManagementConfig,
  DashboardManagementField,
  DashboardManagementRecord,
  DashboardManagementValue,
} from "@/types/dashboard"

type MockDataManagerProps = {
  config: DashboardManagementConfig
  initialRecords: DashboardManagementRecord[]
}

type DialogState =
  | { mode: "create" }
  | { mode: "view" | "edit" | "delete"; record: DashboardManagementRecord }
  | null

function isRecordList(value: unknown): value is DashboardManagementRecord[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string",
    )
  )
}

function emptyDraft(config: DashboardManagementConfig) {
  return Object.fromEntries(
    config.fields.map((field) => [
      field.key,
      field.type === "select" ? (field.options?.[0] ?? "") : "",
    ]),
  ) as Record<string, DashboardManagementValue>
}

function statusStyle(status: DashboardManagementValue) {
  switch (status) {
    case "منشور":
    case "نشطة":
    case "مكتمل":
    case "تم التواصل":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
    case "مسودة":
    case "مخفية":
      return "bg-muted text-muted-foreground"
    case "بانتظار المراجعة":
    case "قيد المراجعة":
      return "bg-amber-500/10 text-amber-700 dark:text-amber-300"
    default:
      return "bg-sky-500/10 text-sky-700 dark:text-sky-300"
  }
}

function fieldValue(
  field: DashboardManagementField,
  value: DashboardManagementValue | undefined,
) {
  if (field.type === "number" && typeof value === "number") {
    return new Intl.NumberFormat("ar-SA").format(value)
  }

  return value ?? "—"
}

export function MockDataManager({
  config,
  initialRecords,
}: MockDataManagerProps) {
  const [records, setRecords] = useState(initialRecords)
  const [hydrated, setHydrated] = useState(false)
  const [storageError, setStorageError] = useState("")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("الكل")
  const [dialog, setDialog] = useState<DialogState>(null)
  const [draft, setDraft] = useState<Record<string, DashboardManagementValue>>(
    () => emptyDraft(config),
  )

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(config.storageKey)
        if (saved !== null) {
          const parsed: unknown = JSON.parse(saved)
          if (!isRecordList(parsed)) {
            throw new Error("بيانات المعاينة المحفوظة لا تطابق الشكل المتوقع")
          }
          setRecords(parsed)
        }
        setHydrated(true)
      } catch (error) {
        setStorageError(
          error instanceof Error
            ? error.message
            : "تعذر تحميل بيانات المعاينة المحفوظة",
        )
        setHydrated(true)
      }
    }, 0)

    return () => window.clearTimeout(timer)
  }, [config.storageKey])

  function commitRecords(nextRecords: DashboardManagementRecord[]) {
    setRecords(nextRecords)
    if (!hydrated || storageError) return
    try {
      window.localStorage.setItem(config.storageKey, JSON.stringify(nextRecords))
    } catch (error) {
      setStorageError(
        error instanceof Error
          ? error.message
          : "تعذر حفظ تعديلات المعاينة على هذا المتصفح",
      )
    }
  }

  const visibleRecords = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("ar")

    return records.filter((record) => {
      const matchesSearch =
        !query ||
        Object.values(record).some((value) =>
          String(value).toLocaleLowerCase("ar").includes(query),
        )
      const status = config.statusField
        ? String(record[config.statusField] ?? "")
        : ""
      const matchesStatus = statusFilter === "الكل" || status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [config.statusField, records, search, statusFilter])

  const statusOptions = config.statusField
    ? Array.from(
        new Set(
          records
            .map((record) => String(record[config.statusField!] ?? ""))
            .filter(Boolean),
        ),
      )
    : []
  const activeCount = config.statusField
    ? records.filter((record) =>
        ["منشور", "نشطة", "مكتمل", "تم التواصل"].includes(
          String(record[config.statusField!] ?? ""),
        ),
      ).length
    : 0
  const pendingCount = config.statusField
    ? records.filter((record) =>
        ["جديد", "قيد المراجعة", "بانتظار المراجعة"].includes(
          String(record[config.statusField!] ?? ""),
        ),
      ).length
    : 0

  function openCreate() {
    setDraft(emptyDraft(config))
    setDialog({ mode: "create" })
  }

  function openEdit(record: DashboardManagementRecord) {
    const nextDraft = emptyDraft(config)
    for (const field of config.fields) {
      nextDraft[field.key] = record[field.key] ?? ""
    }
    setDraft(nextDraft)
    setDialog({ mode: "edit", record })
  }

  function saveRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!dialog || (dialog.mode !== "create" && dialog.mode !== "edit")) return

    const record: DashboardManagementRecord = {
      ...draft,
      id:
        dialog.mode === "edit"
          ? dialog.record.id
          : `demo-${crypto.randomUUID()}`,
    }

    commitRecords(
      dialog.mode === "edit"
        ? records.map((item) => (item.id === record.id ? record : item))
        : [record, ...records],
    )
    setDialog(null)
  }

  function deleteRecord() {
    if (!dialog || dialog.mode !== "delete") return
    commitRecords(
      records.filter((item) => item.id !== dialog.record.id),
    )
    setDialog(null)
  }

  const dialogTitle =
    dialog?.mode === "create"
      ? `إضافة ${config.title}`
      : dialog?.mode === "edit"
        ? `تعديل ${String(dialog.record[config.primaryField] ?? config.title)}`
        : dialog?.mode === "view"
          ? `تفاصيل ${String(dialog.record[config.primaryField] ?? config.title)}`
          : dialog?.mode === "delete"
            ? "تأكيد الحذف"
            : ""

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6">
      <header className="flex w-full min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {config.title}
            </h1>
            <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
              بيانات تجريبية
            </span>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            {config.description}
          </p>
        </div>
        <Button className="h-10 shrink-0 gap-2" onClick={openCreate}>
          <FilePlus2 />
          إضافة جديد
        </Button>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="gap-1 p-4">
          <p className="text-sm text-muted-foreground">إجمالي السجلات</p>
          <p className="text-2xl font-bold">{records.length.toLocaleString("ar-SA")}</p>
        </Card>
        <Card className="gap-1 p-4">
          <p className="text-sm text-muted-foreground">تحتاج إلى متابعة</p>
          <p className="text-2xl font-bold">{pendingCount.toLocaleString("ar-SA")}</p>
        </Card>
        <Card className="gap-1 p-4">
          <p className="text-sm text-muted-foreground">مكتملة أو منشورة</p>
          <p className="text-2xl font-bold">{activeCount.toLocaleString("ar-SA")}</p>
        </Card>
      </div>

      <Card className="gap-0">
        <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center">
          <label className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label={`البحث في ${config.title}`}
              className="h-10 ps-9"
              onChange={(event) => setSearch(event.target.value)}
              placeholder={`ابحث في ${config.title}...`}
              value={search}
            />
          </label>
          {config.statusField ? (
            <select
              aria-label="تصفية حسب الحالة"
              className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
              onChange={(event) => setStatusFilter(event.target.value)}
              value={statusFilter}
            >
              <option>الكل</option>
              {statusOptions.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          ) : null}
          <p className="text-sm text-muted-foreground">
            {visibleRecords.length.toLocaleString("ar-SA")} سجل
          </p>
        </div>

        <div className="hidden max-w-full min-w-0 overflow-x-auto md:block">
          <table className="w-full min-w-[720px] text-start text-sm">
            <thead className="bg-muted/40 text-muted-foreground">
              <tr>
                {config.columns.map((key) => (
                  <th className="px-4 py-3 text-start font-medium" key={key}>
                    {config.fields.find((field) => field.key === key)?.label ?? key}
                  </th>
                ))}
                <th className="px-4 py-3 text-start font-medium">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {visibleRecords.map((record) => (
                <tr className="border-t border-border/70" key={record.id}>
                  {config.columns.map((key) => {
                    const field = config.fields.find((item) => item.key === key)
                    const value = record[key]
                    return (
                      <td className="max-w-64 px-4 py-3 text-start" key={key}>
                        {field?.type === "select" && key === config.statusField ? (
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle(value ?? "")}`}
                          >
                            {fieldValue(field, value)}
                          </span>
                        ) : (
                          <span className="line-clamp-2">
                            {field ? fieldValue(field, value) : value ?? "—"}
                          </span>
                        )}
                      </td>
                    )
                  })}
                  <td className="px-4 py-3 text-start">
                    <div className="flex items-center gap-1">
                      <Button
                        aria-label="عرض التفاصيل"
                        onClick={() => setDialog({ mode: "view", record })}
                        size="icon-sm"
                        variant="ghost"
                      >
                        <Eye />
                      </Button>
                      <Button
                        aria-label="تعديل السجل"
                        onClick={() => openEdit(record)}
                        size="icon-sm"
                        variant="ghost"
                      >
                        <Pencil />
                      </Button>
                      <Button
                        aria-label="حذف السجل"
                        onClick={() => setDialog({ mode: "delete", record })}
                        size="icon-sm"
                        variant="ghost"
                      >
                        <Trash2 className="text-destructive" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {visibleRecords.length === 0 ? (
            <EmptyState onClear={() => { setSearch(""); setStatusFilter("الكل") }} />
          ) : null}
        </div>

        <div className="grid gap-3 p-3 md:hidden">
          {visibleRecords.map((record) => (
            <article className="rounded-xl border border-border p-4" key={record.id}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-semibold">
                    {String(record[config.primaryField] ?? "سجل")}
                  </h2>
                  {config.statusField ? (
                    <span
                      className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle(record[config.statusField] ?? "")}`}
                    >
                      {String(record[config.statusField] ?? "")}
                    </span>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    aria-label="عرض التفاصيل"
                    onClick={() => setDialog({ mode: "view", record })}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <Eye />
                  </Button>
                  <Button
                    aria-label="تعديل السجل"
                    onClick={() => openEdit(record)}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <Pencil />
                  </Button>
                  <Button
                    aria-label="حذف السجل"
                    onClick={() => setDialog({ mode: "delete", record })}
                    size="icon-sm"
                    variant="ghost"
                  >
                    <Trash2 className="text-destructive" />
                  </Button>
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                {config.columns
                  .filter((key) => key !== config.primaryField && key !== config.statusField)
                  .map((key) => {
                    const field = config.fields.find((item) => item.key === key)
                    return (
                      <div className="min-w-0" key={key}>
                        <dt className="text-xs text-muted-foreground">
                          {field?.label ?? key}
                        </dt>
                        <dd className="truncate">
                          {field ? fieldValue(field, record[key]) : record[key] ?? "—"}
                        </dd>
                      </div>
                    )
                  })}
              </dl>
            </article>
          ))}
          {visibleRecords.length === 0 ? (
            <EmptyState onClear={() => { setSearch(""); setStatusFilter("الكل") }} />
          ) : null}
        </div>
      </Card>

      <p className="text-xs leading-6 text-muted-foreground">
        هذه بيانات توضيحية فقط. الإضافات والتعديلات والحذف محفوظة في هذا المتصفح ولا تؤثر على بيانات الموقع.
      </p>
      {storageError ? (
        <p
          className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive"
          role="alert"
        >
          تعذر حفظ أو تحميل بيانات المعاينة: {storageError}
        </p>
      ) : null}

      {dialog ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDialog(null)
          }}
        >
          <section
            aria-labelledby="dashboard-record-dialog-title"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
            role={dialog.mode === "delete" ? "alertdialog" : "dialog"}
          >
            <div className="flex items-center justify-between border-b p-4 sm:p-5">
              <h2 className="font-semibold" id="dashboard-record-dialog-title">
                {dialogTitle}
              </h2>
              <Button
                aria-label="إغلاق"
                onClick={() => setDialog(null)}
                size="icon-sm"
                variant="ghost"
              >
                <X />
              </Button>
            </div>

            {dialog.mode === "view" ? (
              <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
                {config.fields.map((field) => (
                  <div
                    className={field.type === "textarea" ? "sm:col-span-2" : ""}
                    key={field.key}
                  >
                    <p className="mb-1 text-xs text-muted-foreground">
                      {field.label}
                    </p>
                    <p className="whitespace-pre-wrap text-sm leading-6">
                      {String(dialog.record[field.key] ?? "—")}
                    </p>
                  </div>
                ))}
              </div>
            ) : dialog.mode === "delete" ? (
              <div className="space-y-5 p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  سيتم حذف هذا السجل من بيانات المعاينة المحفوظة على هذا المتصفح فقط.
                </p>
                <div className="flex justify-end gap-2">
                  <Button onClick={() => setDialog(null)} variant="outline">
                    إلغاء
                  </Button>
                  <Button onClick={deleteRecord} variant="destructive">
                    <Trash2 />
                    حذف السجل
                  </Button>
                </div>
              </div>
            ) : (
              <form className="space-y-5 p-4 sm:p-5" onSubmit={saveRecord}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {config.fields.map((field) => (
                    <label
                      className={`grid gap-2 text-sm font-medium ${field.type === "textarea" ? "sm:col-span-2" : ""}`}
                      key={field.key}
                    >
                      {field.label}
                      {field.type === "textarea" ? (
                        <textarea
                          className="min-h-24 rounded-lg border border-input bg-background px-3 py-2 font-normal outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                          onChange={(event) =>
                            setDraft((current) => ({
                              ...current,
                              [field.key]: event.target.value,
                            }))
                          }
                          value={String(draft[field.key] ?? "")}
                        />
                      ) : field.type === "select" ? (
                        <select
                          className="h-10 rounded-lg border border-input bg-background px-3 font-normal"
                          onChange={(event) =>
                            setDraft((current) => ({
                              ...current,
                              [field.key]: event.target.value,
                            }))
                          }
                          value={String(draft[field.key] ?? "")}
                        >
                          {(field.options ?? []).map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          required
                          type={field.type === "number" ? "number" : field.type}
                          onChange={(event) =>
                            setDraft((current) => ({
                              ...current,
                              [field.key]:
                                field.type === "number"
                                  ? Number(event.target.value)
                                  : event.target.value,
                            }))
                          }
                          value={String(draft[field.key] ?? "")}
                        />
                      )}
                    </label>
                  ))}
                </div>
                <div className="flex justify-end gap-2 border-t pt-4">
                  <Button onClick={() => setDialog(null)} type="button" variant="outline">
                    إلغاء
                  </Button>
                  <Button type="submit">
                    <Check />
                    حفظ التغييرات
                  </Button>
                </div>
              </form>
            )}
          </section>
        </div>
      ) : null}
    </section>
  )
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="grid min-h-40 place-items-center p-6 text-center">
      <div className="space-y-2">
        <p className="font-medium">لا توجد نتائج مطابقة</p>
        <p className="text-sm text-muted-foreground">
          جرّب تغيير عبارة البحث أو عامل التصفية
        </p>
        <Button onClick={onClear} size="sm" variant="ghost">
          مسح البحث
        </Button>
      </div>
    </div>
  )
}
