import { auth } from "~/lib/auth/auth";
import { headers } from "next/headers";

export default async function getUserSession() {
  "use server";

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session;
  } catch {
    return null;
  }
}
