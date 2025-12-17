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
import { toast } from "sonner";

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
            
              View Author
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReportForm />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyToClipboardButton
              cb={copyToClipboard}
              body="Copy Post URL"
              className="w-full text-left hover:cursor-pointer"
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
