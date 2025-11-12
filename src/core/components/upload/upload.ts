//Prefer outsourcing Malware scan logic to 3rd party
//https://docs.uploadthing.com/getting-started/appdir
//https://docs.clamav.net/manual/Installing.html
//https://www.reddit.com/r/techsupport/comments/pyhum6/can_you_get_malware_by_downloading_a_image/

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { ImageRouter } from "~/app/api/uploadthing/core";

export const ImageUploadButton = generateUploadButton<ImageRouter>();
export const ImageUploadDropzone = generateUploadDropzone<ImageRouter>();
