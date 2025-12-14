export default function normalizePage(
  page: string | null,
  maxPage?: number,
): number {
  //Coerce into a number
  const parsed = Number(page);

  //If not a number or less than 1, default to 1

  if (!Number.isInteger(parsed) || parsed < 1) return 1;
  //If user is searching for higher pages, they probably want the last page
  if (maxPage && parsed > maxPage) return maxPage;

  //Return as is if no issues
  return parsed;
}
