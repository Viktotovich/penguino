//types
import { type SanityDocument } from "next-sanity";

// Components
import BlogPreviewCard from "~/core/components/cards/BlogPreviewCard";

// Sanity setup
import { client } from "~/lib/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, image, body, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPreviewList() {
  const posts = await fetchBlogs();

  async function fetchBlogs() {
    return await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  }

  return (
    <ul className="flex gap-4">
      {posts.map((post) => (
        <li key={post._id}>
          <BlogPreviewCard
            image={post.image}
            title={post.title}
            publishedAt={post.publishedAt}
            slug={post.slug.current}
          />
        </li>
      ))}
    </ul>
  );
}
