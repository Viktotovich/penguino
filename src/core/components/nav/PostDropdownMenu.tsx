"use client";

//utils
import { toast } from "sonner";

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
  function copyToClipboard() {
    const url = new URL(
      `/community/post/${postId}`,
      window.location.origin,
    ).toString();

    navigator.clipboard.writeText(url);
    toast.success("Copied");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontalIcon className="hover:cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Penguino Social Post</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href={`/community/profiles/${authorId}`}
              className="hover:cursor-pointer"
            >
              View Author
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReportForm />
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={copyToClipboard}
            className="w-full text-left hover:cursor-pointer"
          >
            Copy post URL
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
