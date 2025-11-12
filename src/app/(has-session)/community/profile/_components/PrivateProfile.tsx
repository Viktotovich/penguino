//Actions
import getUserSession from "~/lib/auth/get_user_session";

//Components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/core/components/ui/card";
import EditableProfileForm from "./EditableProfileForm";

export default async function PrivateProfile() {
  //Wrapping it in a Promise<> in expectation of a 2nd fetch (posts/comments)
  type AwaitedSessionType = Awaited<ReturnType<typeof getUserSession>>;
  const [userSession] = await Promise.all<AwaitedSessionType>([
    getUserSession(),
  ]);

  return (
    <section>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>Manage your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <EditableProfileForm user={userSession?.user} />
        </CardContent>
      </Card>
      <div className="py-12">
        <p>{userSession?.user.name}&apos;s latest posts:</p>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>*Each post in a card + hamburger RSC controls</CardTitle>
            <CardDescription>
              The first few paragraphs + contcat + a clickable option to [Read
              More]...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
