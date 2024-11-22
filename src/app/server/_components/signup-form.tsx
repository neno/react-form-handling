"use client";

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
import { signup } from "~/actions/users.actions";

export function SignupForm() {
  const [state, action, isPending] = useActionState(signup, undefined);

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>Only server validation</CardDescription>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                defaultValue={state?.fields?.name ?? ""}
              />
            </div>
            {state?.errors?.name && (
              <p className="text-sm text-red-500">{state.errors.name}</p>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="john@example.com"
                defaultValue={state?.fields?.email ?? ""}
              />
            </div>
            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                defaultValue={state?.fields?.password ?? ""}
              />
            </div>
            {state?.errors?.password && (
              <div className="text-sm text-red-500">
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Signup"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
