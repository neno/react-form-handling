"use client";

import { signupWithConform } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { SignupFormSchema } from "~/types/users";

export function SignupForm() {
  const [lastResult, action, isPending] = useActionState(
    signupWithConform,
    undefined,
  );
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: SignupFormSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>Only server validation</CardDescription>
      </CardHeader>
      <CardContent>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                key={fields.name.key}
                name={fields.name.name}
                // defaultValue={fields.name.initialValue}
                // @ts-expect-error "not yet fully compatible with useActionState - form values are reset"
                defaultValue={
                  lastResult?.initialValue?.name ?? fields.name.initialValue
                }
                id="name"
                placeholder="John Doe"
              />
              <p className="h-5 pt-1 text-sm text-destructive">
                {fields.name.errors}
              </p>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                key={fields.email.key}
                name={fields.email.name}
                // defaultValue={fields.email.initialValue}
                // @ts-expect-error "not yet fully compatible with useActionState - form values are reset"
                defaultValue={
                  lastResult?.initialValue?.email ?? fields.email.initialValue
                }
                id="email"
                placeholder="john@example.com"
              />
              <p className="h-5 pt-1 text-sm text-destructive">
                {fields.email.errors}
              </p>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                key={fields.password.key}
                name={fields.password.name}
                // defaultValue={fields.password.initialValue}
                // @ts-expect-error "not yet fully compatible with useActionState - form values are reset"
                defaultValue={
                  lastResult?.initialValue?.password ??
                  fields.password.initialValue
                }
                id="password"
                type="password"
              />
              <p className="h-5 pt-1 text-sm text-destructive">
                {fields.password.errors}
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Signup"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
