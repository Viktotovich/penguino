//Components
import PaginationControl from "~/core/components/dynamic/PaginationControl";

export default async function PrivateProfilePage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const query = await searchParams;
  const currPage = query?.page ? query.page : 1;

  return (
    <div>
      <p>{currPage}</p>
      <PaginationControl totalPages={10} />
    </div>
  );
}
