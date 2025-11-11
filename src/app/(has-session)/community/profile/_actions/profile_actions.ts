"use server";
import prisma from "~/lib/prisma/prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const NameSchema = z.object({
  name: z.string().min(4),
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

    return { errors: null, message: "Name updated successfully!" };
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
