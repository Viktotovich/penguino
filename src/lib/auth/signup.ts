"use client";

import { z } from "zod";

import {
  signInProvider,
  signUpEmail,
  signOut,
  signInDefault,
} from "./auth-client";

const SignupFormSchema = z.object({
  name: z.string(),
  email: z.email().min(5).toLowerCase(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type SignupState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function signupDefault(
  prevState: SignupState,
  formData: FormData,
) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirm-password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "One or more fields was entered incorrectly, please try again",
    };
  }

  if (validatedFields.data.confirmPassword !== validatedFields.data.password) {
    return {
      errors: {
        confirmPassword: ["Passwords do not match!"],
      },
      message: "Password does not match",
    };
  }

  const { data, error } = await signUpEmail(
    validatedFields.data.name,
    validatedFields.data.email,
    validatedFields.data.password,
  );

  if (error) {
    return {
      message: "Something went wrong when creating your account",
    };
  }

  return {
    message: "Success",
  };
}
