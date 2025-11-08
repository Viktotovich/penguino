type AnchorButtonSkeletonProps = {
  cta: string;
  isPrimary: boolean;
};

export default function AnchorButtonSkeleton({
  cta,
  isPrimary,
}: AnchorButtonSkeletonProps) {
  return (
    <button
      className={`border-border rounded-3xl border px-7 py-2 text-center text-base font-bold ${isPrimary && "bg-primary-500 text-white"}`}
      disabled
    >
      {cta}
    </button>
  );
}
