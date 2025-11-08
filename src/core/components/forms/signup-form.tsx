"use client";

import { cn } from "~/lib/utils";
import { Button } from "~/core/components/ui/button";
import { Card, CardContent } from "~/core/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/core/components/ui/field";
import { Input } from "~/core/components/ui/input";
import Image from "next/image";

// Form Hooks
import { useActionState } from "react";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enter your name and email below to create your account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="Viktor Gonzales"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#000"
                        d="M12 5a7 7 0 1 0 6.93 8H13a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1a9 9 0 1 1-2.654-6.381a1 1 0 0 1-1.41 1.418A6.98 6.98 0 0 0 12 5"
                      />
                    </g>
                  </svg>
                  <span className="sr-only">Sign up with Google</span>
                </Button>
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <mask id="SVGVbuWT6fy">
                      <g fill="#fff">
                        <path
                          fillOpacity="0"
                          stroke="#fff"
                          strokeDasharray="48"
                          strokeDashoffset="48"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.5"
                          d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.6s"
                            dur="0.4s"
                            values="0;1"
                          />
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="48;0"
                          />
                        </path>
                        <circle cx="7.24" cy="11.97" r="2.24" opacity="0">
                          <animate
                            fill="freeze"
                            attributeName="cx"
                            begin="1s"
                            dur="0.2s"
                            values="7.24;3.94"
                          />
                          <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="1s"
                            to="1"
                          />
                        </circle>
                        <circle cx="16.76" cy="11.97" r="2.24" opacity="0">
                          <animate
                            fill="freeze"
                            attributeName="cx"
                            begin="1s"
                            dur="0.2s"
                            values="16.76;20.06"
                          />
                          <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="1s"
                            to="1"
                          />
                        </circle>
                        <circle cx="18.45" cy="4.23" r="1.61" opacity="0">
                          <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="2.6s"
                            to="1"
                          />
                        </circle>
                      </g>
                      <path
                        fill="none"
                        stroke="#fff"
                        strokeDasharray="12"
                        strokeDashoffset="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.8"
                        d="M12 8.75l1.18 -5.64l5.03 1.07"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="2.4s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                      <g fillOpacity="0">
                        <circle cx="8.45" cy="13.59" r="1.61">
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="1.2s"
                            dur="0.4s"
                            values="0;1"
                          />
                        </circle>
                        <circle cx="15.55" cy="13.59" r="1.61">
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="1.6s"
                            dur="0.4s"
                            values="0;1"
                          />
                        </circle>
                      </g>
                      <path
                        fill="none"
                        stroke="#000"
                        strokeDasharray="10"
                        strokeDashoffset="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.8"
                        d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="2s"
                          dur="0.2s"
                          values="10;0"
                        />
                      </path>
                    </mask>
                    <rect
                      width="24"
                      height="24"
                      fill="#000"
                      mask="url(#SVGVbuWT6fy)"
                    />
                  </svg>
                  <span className="sr-only">Sign up with Reddit</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Already have an account? <a href="#">Sign in</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="https://res.cloudinary.com/dxryzhwxi/image/upload/v1762603571/penguino-registration-page_hnmtu8.png"
              alt="Penguino Concept Art"
              className="absolute inset-0 h-full w-full object-cover object-center"
              height={400}
              width={400}
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <a href="/privacy">Privacy Policy & Terms of Service</a>.
      </FieldDescription>
    </div>
  );
}
