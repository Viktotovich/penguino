import getUserSession from "~/lib/auth/get_user_session";

export default async function PrivateProfile() {
  const userSession = await getUserSession()

  return (
    <section>
       <p>Basic profile page</p>
       <p>{userSession?.user.name}</p>
    </section>
  );
}
