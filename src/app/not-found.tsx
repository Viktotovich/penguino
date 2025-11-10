//Components
import Link from "next/link";
import Image from "next/image";
import { Link2Icon } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen py-18">
      <Image
        alt="not found"
        src="https://res.cloudinary.com/dxryzhwxi/image/upload/v1762791675/404_c5xwm2.png"
        height="768"
        width="1366"
        className="absolute -z-2 min-h-screen min-w-full object-cover"
      />
      <div className="bg-primary-500/90 absolute top-[50%] flex w-full flex-col items-center justify-center gap-2 py-12 text-white">
        <h2 className="text-center text-3xl md:text-4xl">Page Not Found</h2>
        <p className="max-w-[65ch] text-center">
          Through the voids of the unknown, the spaces made for the bold, and
          the giant leaps of a user. This page yet remains to be created (or
          fixed)
        </p>
        <Link
          href="/"
          className="flex justify-center text-2xl underline hover:cursor-pointer"
        >
          <div className="flex items-center gap-2">
            Return Home <Link2Icon />
          </div>
        </Link>
      </div>
    </main>
  );
}
