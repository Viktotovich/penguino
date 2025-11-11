"use server";
import prisma from "~/lib/prisma/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "~/lib/auth/auth";
import { headers } from "next/headers";

const NameSchema = z.object({
  name: z.string().min(4),
});

const MAX_FILE_SIZE = 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const AvatarSchema = z.object({
  image: z
    .file()
    .refine((file) => file.size <= MAX_FILE_SIZE, "Max image size is 1MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only jpeg, jpg, png and webp are supported",
    ),
  /*
  TODO: Malware Parser
  https://github.com/pompelmi/pompelmi
  */
});

export type NameChangeState = {
  errors?: {
    name?: string[];
  } | null;
  message?: string | null;
};

export async function updateName(
  userId: number | string,
  prevState: NameChangeState,
  formData: FormData,
) {
  const validatedFields = NameSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please enter a valid name",
    };
  }

  try {
    await prisma.user.update({
      where: {
        id: String(userId),
      },
      data: {
        name: validatedFields.data.name,
      },
    });

    //update user name on the stale session
    await auth.api.updateUser({
      headers: await headers(),
      body: {
        name: validatedFields.data.name,
      },
    });

    return {
      errors: null,
      message: "Name updated successfully to " + validatedFields.data.name,
    };
  } catch (err) {
    return {
      errors: null,
      message: (err as Error).message || "Something went wrong",
    };
  } finally {
    //Revalidate route >> both the profile and the public profile
    revalidatePath("/community/profile");
    revalidatePath(`/community/profile/${userId}`);
  }
}
