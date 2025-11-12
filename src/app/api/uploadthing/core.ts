//Uploadthing base setup
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

//Caveat: this gets it from client
import { authClient as auth } from "~/lib/auth/auth-client";

const fileUpload = createUploadthing();

export const imageRouter = {
  imageUploader: fileUpload({
    image: {
      maxFileSize: "1MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      //Long term warning >> Keep an eye on this and add db verification
      const user = (await auth.getSession()).data?.user;

      if (!user) throw new UploadThingError("Unauthorized");

      return {
        userId: user.id,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      //Runs on server after complete >> file.url and metdata.userId is accessible
      console.log(file);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type ImageRouter = typeof imageRouter;
