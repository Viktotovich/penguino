"use server";
//Components
import PaginationControl from "~/core/components/dynamic/PaginationControl";
import PostList from "~/core/components/dynamic/PostList";

//Utils
import normalizePage from "~/lib/pagination/normalizePage";

//Skeleton
import { Suspense } from "react";

//Actions
import { fetchPagesCount } from "./_actions/community_posts_actions";

export default async function PrivateProfilePage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  //Pagination logic
  const query = await searchParams;
  const totalPages = await fetchPagesCount();
  const currPage = normalizePage(query?.page ?? null, totalPages);

  return (
    <main className="px-6 pt-15 pb-32">
      <div className="flex flex-col items-center">
        {totalPages === 0 && (
          <p>
            Huh, no posts? <span className="italic">You can be the first!</span>
          </p>
        )}
        <Suspense fallback={<p>TODO: Skeleton</p>}>
          <PostList currPage={currPage} />
        </Suspense>
        <PaginationControl totalPages={totalPages} />
      </div>
    </main>
  );
}
