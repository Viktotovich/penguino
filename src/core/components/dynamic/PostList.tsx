"use server";

//actions
import { fetchLatestPosts } from "~/app/(has-session)/community/(community-main)/_actions/community_posts_actions";

//Components
import PostPreviewCard from "../cards/PostPreviewCard";
import { Separator } from "@radix-ui/react-separator";

type PostListProps = {
  currPage: number;
};

export default async function PostList({ currPage }: PostListProps) {
  //Action
  const posts = await fetchLatestPosts(currPage);

  return (
    <section className="flex flex-col gap-12">
      {posts.map((post) => (
        <PostPreviewCard userPost={post} key={post.id} />
      ))}
    </section>
  );
}
