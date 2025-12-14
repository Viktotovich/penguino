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
} from "../ui/card";

type PostPreviewCardProps = {
  userPost: post;
};

export default function PostPreviewCard({ userPost }: PostPreviewCardProps) {
  return (
    <div>
      <p>Like button, Readmore, content, etc</p>
      <Card>
        <CardHeader>
          <CardDescription>{shortenBody(userPost.body, 100)}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
