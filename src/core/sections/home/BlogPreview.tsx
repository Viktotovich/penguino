//types
import { type SanityDocument } from "next-sanity";

// Sanity setup
import { client } from "~/lib/sanity/client";

//Components
import BlogPreviewCard from "~/core/components/cards/BlogPreviewCard";

//Loading wrapper
import { Suspense } from "react";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, image, body, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPreview() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  //TODO: Suspense wrapper plus BlogPreview Skeleton + Refactor to client component fetching from an internal API endpoint
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="px-6 py-12 md:px-12 xl:px-24">
        <ul className="flex gap-y-4">
          {posts.map((post) => (
            <div key={post._id}>
              <BlogPreviewCard
                image={post.image}
                title={post.title}
                publishedAt={post.publishedAt}
                slug={post.slug.current}
              />
            </div>
          ))}
        </ul>
      </section>
    </Suspense>
  );
}
