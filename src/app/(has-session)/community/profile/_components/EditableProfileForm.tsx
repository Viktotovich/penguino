"use client";

//Hooks
import { useActionState, useEffect, useState } from "react";

//Icons
import { Pencil, Check } from "lucide-react";

//Components
import { Field, FieldGroup, FieldLabel } from "~/core/components/ui/field";
import { Input } from "~/core/components/ui/input";
import { Button } from "~/core/components/ui/button";

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
  const [state, formAction] = useActionState(updateNameWithId, defaultState);

  useEffect(() => {
    if (state?.message) {
      toast.message(state.message);
    }
  }, [state]);

  function formatJoinDate(createdAt: Date) {
    return createdAt.toString().split("GMT")[0];
  }

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name:</FieldLabel>
          <div className="flex gap-2">
            {/*Not having the key led to a funny bug where the name was 
            updated on db, but not on client */}
            <Input
              disabled={!canEdit}
              id="name"
              name="name"
              placeholder={"Your Name"}
              defaultValue={user ? user.name : ""}
              key={state.message ? state.message : user?.name}
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
              onClick={() => {
                //
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
      </FieldGroup>
      <Toaster />
    </form>
  );
}
