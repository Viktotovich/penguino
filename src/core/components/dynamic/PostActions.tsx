// components
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import Link from "next/link";

//Icons
import { MessageCircle, ThumbsUp } from "lucide-react";

type PostActionsProps = {
  likes: number;
  isLiked: boolean;
  commentQuantity: number;
  postId: string;
};

export default function PostActions({
  likes,
  isLiked,
  commentQuantity,
  postId,
}: PostActionsProps) {
  return (
    <ToggleGroup type="multiple" variant={"default"} spacing={2} size={"lg"}>
      <ToggleGroupItem value="likes" aria-label="Toggle Liked">
        <ThumbsUp className={`${isLiked ? "fill-blue-200" : ""}`} />
        {likes}
      </ToggleGroupItem>
      <ToggleGroupItem value="comments" aria-label="Open Post Comments">
        <Link
          href={`community/post/${postId}`}
          className="flex items-center gap-1"
        >
          <MessageCircle />
          {commentQuantity}
        </Link>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
