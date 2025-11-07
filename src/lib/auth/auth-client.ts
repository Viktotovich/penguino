import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

export async function signIn(provider: "reddit" | "google") {
  const data = await authClient.signIn.social({
    provider,
  });
}
