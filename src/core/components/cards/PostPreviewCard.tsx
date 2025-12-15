"use client";

//types
import type { post } from "~/generated/prisma/client";

//Utils
import shortenBody from "~/lib/posts/shortenBody";

//Components
import {
  Card,
  CardHeader,
  CardDescription,
  CardAction,
  CardFooter,
  CardTitle,
  CardContent,
} from "../ui/card";
import ReadMoreAnchor from "../buttons/ReadMoreAnchor";
import PostDropdownMenu from "../nav/PostDropdownMenu";

type PostPreviewCardProps = {
  userPost: post;
};

export default function PostPreviewCard({ userPost }: PostPreviewCardProps) {
  return (
    <div>
      <p>Like button, Readmore, content, etc</p>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>{userPost.title}</CardTitle>
          <CardAction>
            <PostDropdownMenu
              authorId={userPost.authorId}
              postId={userPost.id}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {shortenBody(userPost.body, 100)}{" "}
            <ReadMoreAnchor
              href={`/community/post/${userPost.id}`}
              body="[Read More]"
            />
          </CardDescription>
        </CardContent>
        <CardFooter>
          <p>Likes and all</p>
        </CardFooter>
      </Card>
    </div>
  );
}
