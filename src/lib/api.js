export const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ??
  "https://form.wbzard.com/api/s/944a76d8-8079-4b98-a494-5bf6a4bad7a2";

export async function submitContactForm(payload) {
  const response = await fetch(CONTACT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}
