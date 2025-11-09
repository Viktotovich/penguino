"use client";

import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient();

//Run everything through zod before passing it to any of the auth utils
export async function signInProvider(provider: "reddit" | "google") {
  const data = await authClient.signIn.social({
    provider,
    callbackURL: "/dashboard",
  });

  return data;
}

export async function signInDefault(
  email: string,
  password: string,
  rememberMe: boolean,
) {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe,
    callbackURL: "/dashboard",
  });

  return { data, error };
}

export async function signUpEmail(
  name: string,
  email: string,
  password: string,
) {
  const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image: undefined,
    callbackURL: "/dashboard",
  });

  return { data, error };
}

export async function signOut() {
  try {
    await authClient.signOut();
    return null;
  } catch (err) {
    console.error(err);
    return err;
  }
}
