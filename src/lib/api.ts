const DEFAULT_API_BASE_URL = "https://hitapi.kumasihive.com/api";

function getApiBaseUrl() {
  const configuredBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL;

  return configuredBaseUrl.endsWith("/")
    ? configuredBaseUrl.slice(0, -1)
    : configuredBaseUrl;
}

export async function submitJson<TPayload extends Record<string, unknown>>(
  path: string,
  payload: TPayload,
) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const response = await fetch(`${getApiBaseUrl()}${normalizedPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail =
      data.detail ||
      (data.errors
        ? Object.values<string>(data.errors)[0]
        : "Something went wrong. Please try again.");
    throw new Error(detail);
  }

  return data;
}
