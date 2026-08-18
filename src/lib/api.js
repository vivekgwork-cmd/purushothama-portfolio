// DUMMY endpoint — swap this for the real lead-capture API URL when it's ready.
// Configure it via a .env file: VITE_CONTACT_API_URL=https://your-real-api.example.com/leads
export const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ?? "https://api.example.com/dummy/leads";

/**
 * Submits the contact form. Currently mocked: it logs the payload and
 * resolves as if the request succeeded, so the UI/UX can be built and
 * tested end-to-end before the real endpoint exists.
 *
 * Once a real endpoint is available, delete the mock block below and
 * uncomment the real fetch call.
 */
export async function submitContactForm(payload) {
  // ---- MOCK IMPLEMENTATION (remove once a real endpoint is wired up) ----
  console.info("[dummy contact API] POST", CONTACT_API_URL, payload);
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true, message: "Thanks! This was a simulated submission." };
  // -------------------------------------------------------------------

  // ---- REAL IMPLEMENTATION (uncomment when the endpoint is ready) ----
  // const response = await fetch(CONTACT_API_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!response.ok) {
  //   throw new Error(`Request failed with status ${response.status}`);
  // }
  // return response.json();
}
