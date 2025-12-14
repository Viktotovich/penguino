// Components
import PrivateProfile from "./_components/PrivateProfile";

//Suspense wrapper / loading
import { Suspense } from "react";

//Types
import type { post } from "~/generated/prisma/client";

const examplePost: post = [
  {
    id: 1,
    hidden: false,
    title: "Test Post to see if everything is a-okay",
  },
];

export const dynamic = "force-dynamic";

export default function PrivateProfilePage() {
  return (
    <main className="px-6 py-12 md:px-12 xl:px-24">
      <Suspense fallback={"loading..."}>
        <PrivateProfile />
      </Suspense>
      <div>
        <p>Latest posts/comments, 5 posts/comments + pagination</p>
      </div>
    </main>
  );
}
