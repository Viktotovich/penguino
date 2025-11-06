import AnchorButton from "../buttons/AnchorButton";
import Image from "next/image";

type BlogPreviewCardProps = {
  image: string | null;
  title: string;
  slug: string;
  publishedAt: string;
};

export default function BlogPreviewCard({
  image,
  title,
  slug,
  publishedAt,
}: BlogPreviewCardProps) {
  return (
    <div className="rounded-2xl bg-slate-800 px-4 pb-4">
      <div>
        <Image src={image ?? ""} alt="Blog Image" width="100" height="300" />
      </div>
      <div className="flex gap-4">
        <div>
          <h3>{title}</h3>
          <p className="text-sm text-slate-400">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
        <AnchorButton
          href={`/posts/${slug}/`}
          cta="Read More"
          isPrimary={false}
        />
      </div>
    </div>
  );
}
