import { Domine, Cactus_Classical_Serif } from "next/font/google";

//Primary, Header and CTA font
export const domine = Domine({
  subsets: ["latin"],
  weight: ["500"],
});

//Secondary Font
export const cactus = Cactus_Classical_Serif({
  subsets: ["latin"],
  weight: ["400"],
});
