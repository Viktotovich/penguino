"use client";

//Utils
import { useSearchParams, usePathname, useRouter } from "next/navigation";

//Components
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "../ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type PaginationControlProps = {
  totalPages: number;
};

export default function PaginationControl({
  totalPages,
}: PaginationControlProps) {
  //Params x Pathname for navigation control
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const pathname = usePathname();

  const currPage = parseSearch();

  function parseSearch() {
    //Could be a string, or a number to mess with the db
    const unsafeCurrPage = searchParams.get("page");
    const parsedPage = Number(unsafeCurrPage);

    //Removes number-jacking && string insertion
    const currPage =
      !parsedPage || Number.isNaN(parsedPage)
        ? 1
        : Math.min(Math.max(parsedPage, 1), totalPages);

    return currPage;
  }

  function handleSearch(unsafeNextPage: number) {
    //Limits to just the set amount of pages
    const nextPage = Math.max(1, Math.min(unsafeNextPage, totalPages));
    params.set("page", nextPage.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col items-center">
      <output className="mb-2">Current page: {currPage}</output>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                onClick={() => handleSearch(currPage - 1)}
                disabled={currPage <= 1}
                className="bg-transparent text-black transition-all duration-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
                aria-label="Go to previous page"
              >
                <ChevronLeftIcon />
                Previous
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
            <PaginationItem>
              <Button
                onClick={() => handleSearch(currPage + 1)}
                disabled={currPage >= totalPages}
                className="bg-transparent text-black transition-all duration-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
                aria-label="Go to next page"
              >
                Go forward
                <ChevronRightIcon />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
