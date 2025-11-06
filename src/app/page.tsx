//Sections
import HomepageHero from "~/core/sections/home/HomepageHero";
import BlogPreview from "~/core/sections/home/BlogPreview";

export default async function Home() {
  return (
    <main>
      <HomepageHero />
      <div className="flex items-center justify-center bg-slate-900/60 py-24">
        <p className="text-center">Video here</p>
      </div>
      <BlogPreview />
    </main>
  );
}
