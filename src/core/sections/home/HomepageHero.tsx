//utils
import { domine } from "~/core/fonts/fonts";

//Components
import AnchorButton from "~/core/components/buttons/AnchorButton";

export default function HomepageHero() {
  return (
    <section className="flex flex-col items-center px-6 pt-53 pb-32">
      <h1
        className={`${domine.className} max-w-[25ch] pb-4 text-center text-3xl text-white md:text-4xl`}
      >
        The last entrepenurial platform you would ever need.{" "}
        <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-[length:100%_3px] bg-bottom bg-no-repeat">
          FREE
        </span>
      </h1>
      <p className="mb-8 max-w-[55ch] text-center text-sm md:text-base">
        Penguino is the place to build long lasting connections with likeminded
        individuals, get advice, and build life-long partnerships
      </p>

      <div className="flex flex-col gap-4 md:flex-row">
        <AnchorButton cta="Join Now" href="/register" isPrimary={true} />
        <AnchorButton
          cta="See the community"
          href="/community"
          isPrimary={false}
        />
      </div>
    </section>
  );
}
