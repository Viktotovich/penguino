import { Patua_One, Lusitana } from "next/font/google";

//Header
export const patua = Patua_One({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400"],
});
