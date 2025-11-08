import AnchorButtonSkeleton from "~/core/components/buttons/AnchorButtonSkeleton";

export default function BlogPreviewCardSkeleton() {
  return (
    <div className="bg-primary-gradient-skeleton rounded-2xl px-4 pb-4">
      <div className="h-75 w-25"></div>
      <div className="flex gap-4">
        <div>
          <h3>Fetching...</h3>
          <p className="text-sm text-slate-400">fetching...</p>
        </div>
        <AnchorButtonSkeleton cta="Loading..." isPrimary={false} />
      </div>
    </div>
  );
}
