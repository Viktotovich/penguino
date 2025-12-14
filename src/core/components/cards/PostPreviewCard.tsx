"use client";

//types
import type { post } from "~/generated/prisma/client";

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
          <CardDescription>{userPost.body}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
