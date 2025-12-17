"use client";

//Components
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

//Dynamic components
import ReportForm from "../forms/ReportForm";
import CopyToClipboardButton from "../buttons/CopyToClipboardButton";

//Icons
import { MoreHorizontalIcon } from "lucide-react";

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
      `/community/post/${postId}`,
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
            <CopyToClipboardButton link={getPostUrl()} body="Copy Post URL" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
