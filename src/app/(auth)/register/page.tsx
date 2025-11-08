import { SignupForm } from "~/core/components/forms/signup-form";

export default function RegistrationPage() {
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
