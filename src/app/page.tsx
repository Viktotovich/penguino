//Sections
import HomepageHero from "~/core/sections/home/HomepageHero";

export default async function Home() {
  return (
    <main>
      <HomepageHero />
      <div className="bg-slate-900/60">
        <p className="py-24">Test</p>
      </div>
    </main>
  );
}
