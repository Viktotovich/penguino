"use client";

//Hooks
import { useActionState, useState } from "react";

//Icons
import { Pencil, Check } from "lucide-react";

//Components
import { Field, FieldGroup, FieldLabel } from "~/core/components/ui/field";
import { Input } from "~/core/components/ui/input";
import { Button } from "~/core/components/ui/button";
import { ImageUploadDropzone } from "~/core/components/upload/upload";
import { AvatarImage, Avatar } from "~/core/components/ui/avatar";

//Actions
import { updateName } from "../_actions/profile_actions";

//State obj
import { NameChangeState } from "../_actions/profile_actions";

// Popup + its caller
import { toast } from "sonner";
import { Toaster } from "~/core/components/ui/sonner";

type EditableProfileFormTypes = {
  user:
    | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined | undefined;
      }
    | undefined;
};

export default function EditableProfileForm({
  user,
}: EditableProfileFormTypes) {
  const defaultState: NameChangeState = {
    errors: null,
    message: null,
  };
  const updateNameWithId = updateName.bind(null, user!.id);

  const [canEdit, setCanEdit] = useState(false);
  //Can also be refactored, but would be extra work for nothing
  const [username, setUsername] = useState(() => user?.name ?? "");
  const [state, formAction] = useActionState(updateNameWithId, defaultState);

  if (state?.message) {
    //clear old loading toast
    toast.dismiss();
    toast.message(state.message);
  }

  function showLoading() {
    toast.loading("Saving Changes...");

    /*To prevent submission blocking, if it were lucid >> I'd wrap in a trx to
    prevent duplicate submissions << TODO: Also block duplicate submissions 
    (ACID) -- Before/On Prod
    
    https://www.prisma.io/docs/orm/prisma-client/queries/transactions
    /community/profile/_actions/profile_actions.ts
    */
    setTimeout(() => {
      setCanEdit(false);
    }, 1000);
  }

  function formatJoinDate(createdAt: Date) {
    return createdAt.toString().split("GMT")[0];
  }

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name:</FieldLabel>
          <div className="flex gap-2">
            <Input
              disabled={!canEdit}
              id="name"
              name="name"
              onChange={(e) => setUsername(e.target.value)}
              placeholder={"Your Name"}
              value={username}
            />
            <Button
              aria-label={canEdit ? "Disable Editing" : "Enable Editing"}
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setCanEdit(!canEdit);
              }}
            >
              <Pencil />
            </Button>
            <Button
              aria-label="Save Edits"
              disabled={!canEdit}
              className={`${canEdit ? "bg-green-500" : ""} hover:cursor-pointer`}
              type="submit"
              onClick={() => {
                showLoading();
              }}
            >
              <Check />
            </Button>
          </div>
        </Field>
        <Field>
          <FieldLabel>Email:</FieldLabel>
          <div>
            <Input
              disabled={true}
              id="email"
              placeholder={"Your Email"}
              defaultValue={user ? user.email : ""}
            />
          </div>
        </Field>
        <Field>
          <FieldLabel>Join Date:</FieldLabel>
          <div>
            <Input
              disabled={true}
              id="created-at"
              defaultValue={user ? formatJoinDate(user.createdAt) : ""}
            />
          </div>
        </Field>
        <FieldLabel htmlFor="name">Avatar:</FieldLabel>
        <Avatar>
          <AvatarImage src={user?.image ? user.image : ""} />
        </Avatar>
        <ImageUploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            toast.success("Succesfully changed Avatar");
          }}
        />
      </FieldGroup>
      <Toaster />
    </form>
  );
}
