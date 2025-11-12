import { createRouteHandler } from "uploadthing/next";
import { imageRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: imageRouter,
});
