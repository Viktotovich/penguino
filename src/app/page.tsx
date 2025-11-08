//Sections
import HomepageHero from "~/core/sections/home/HomepageHero";
import BlogPreview from "~/core/sections/home/BlogPreview";

export default async function Home() {
  return (
    <main>
      <HomepageHero />
      <div className="bg-primary-500 flex items-center justify-center py-24">
        <p className="text-center text-white">Video here</p>
      </div>
      <BlogPreview />
    </main>
  );
}
