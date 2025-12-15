//Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

//Dynamic components
import ReportForm from "../forms/ReportForm";

//Icons
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "../ui/button";

type PostDropdownMenuProps = {
  authorId: string;
  postId: string;
};

export default function PostDropdownMenu({
  authorId,
  postId,
}: PostDropdownMenuProps) {
  function getPostUrl() {
    return new URL(
      `/community/posts/${postId}`,
      window.location.origin,
    ).toString();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontalIcon className="hover:cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Penguino Social Post</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={`/community/profiles/${authorId}`}>View Author</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReportForm />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                navigator.clipboard.writeText(getPostUrl());
              }}
            >
              Copy Post URL
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
