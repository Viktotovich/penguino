import { SignupForm } from "~/core/components/forms/signup-form";
import { redirect } from "next/navigation";

//Check if user has a session through a server action
import getUserSession from "~/lib/auth/get_user_session";

export default async function RegistrationPage() {
  const session = await getUserSession();

  //TODO: can stalemate the user if session exists but is invalid
  if (session) redirect("/community")

  return (
    <section className="px-6 pt-53 pb-32">
      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-4xl">
          <SignupForm />
        </div>
      </div>
    </section>
  );
}
