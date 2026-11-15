import type {
  VisitorFeedbackSubmissionResult,
  VisitorFeedbackFormValues,
  ServiceRequestFormValues,
  ServiceRequestSubmissionResult,
  VisitRequestFormValues,
  VisitRequestSubmissionResult,
  Web3FormsApiResponse,
  Web3FormsServiceRequestPayload,
  Web3FormsVisitorFeedbackPayload,
  Web3FormsVisitRequestPayload,
} from "@/types/website";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function isSuccessfulResponse(
  value: unknown
): value is Web3FormsApiResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true
  );
}

export async function submitVisitRequest(
  values: VisitRequestFormValues,
  botcheck: string,
  locale: "ar" | "en"
): Promise<VisitRequestSubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, reason: "not-configured" };
  }

  const payload: Web3FormsVisitRequestPayload = {
    access_key: accessKey,
    subject:
      locale === "en"
        ? `New visit request: ${values.name.trim()}`
        : `طلب زيارة جديد: ${values.name.trim()}`,
    from_name:
      locale === "en"
        ? "Mohammad Alehewi Platform - Visit Request"
        : "منصة محمد الإحيوي - طلب زيارة",
    replyto: values.email.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    category: locale === "en" ? "Visit request" : "طلب زيارة",
    phone: `${values.phoneCode} ${values.phoneNumber.trim()}`,
    country: values.country,
    city: values.city.trim(),
    visit_details: values.details.trim(),
    visit_terms:
      locale === "en"
        ? "Visit terms and conditions accepted"
        : "تمت الموافقة على ضوابط الزيارة",
    botcheck,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, reason: "request-failed" };
    }
    const result: unknown = await response.json();
    if (isSuccessfulResponse(result)) {
      return { success: true };
    }
    return { success: false, reason: "rejected" };
  } catch {
    return { success: false, reason: "request-failed" };
  }
}

export async function submitServiceRequest(
  values: ServiceRequestFormValues,
  serviceTitles: string[],
  botcheck: string
): Promise<ServiceRequestSubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, reason: "not-configured" };
  }

  const selectedServices = serviceTitles.join("، ");
  const payload: Web3FormsServiceRequestPayload = {
    access_key: accessKey,
    subject:
      serviceTitles.length === 1
        ? `طلب خدمة: ${serviceTitles[0]}`
        : `طلب خدمات جديد: ${values.businessName.trim()}`,
    from_name: "منصة محمد الإحيوي - طلب خدمات",
    replyto: values.email.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    category: "طلب خدمات المنشآت",
    phone: values.phone.trim(),
    business_name: values.businessName.trim(),
    business_type: values.businessType.trim(),
    city: values.city.trim(),
    profile_url: values.profileUrl.trim(),
    selected_services: selectedServices,
    details: values.details.trim(),
    botcheck,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, reason: "request-failed" };
    }
    const result: unknown = await response.json();
    if (isSuccessfulResponse(result)) {
      return { success: true };
    }
    return { success: false, reason: "rejected" };
  } catch {
    return { success: false, reason: "request-failed" };
  }
}

export async function submitVisitorFeedback(
  values: VisitorFeedbackFormValues,
  categoryLabel: string,
  botcheck: string,
  locale: "ar" | "en"
): Promise<VisitorFeedbackSubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, reason: "not-configured" };
  }

  const payload: Web3FormsVisitorFeedbackPayload = {
    access_key: accessKey,
    subject:
      locale === "en"
        ? `New feedback: ${categoryLabel}`
        : `مشاركة رأي جديدة: ${categoryLabel}`,
    from_name:
      locale === "en"
        ? "Mohammad Alehewi Platform - Feedback"
        : "منصة محمد الإحيوي - مشاركة رأي",
    replyto: values.email.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    category: categoryLabel,
    message: values.message.trim(),
    botcheck,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, reason: "request-failed" };
    }
    const result: unknown = await response.json();
    if (isSuccessfulResponse(result)) {
      return { success: true };
    }
    return { success: false, reason: "rejected" };
  } catch {
    return { success: false, reason: "request-failed" };
  }
}