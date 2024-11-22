"use client";

import { useActionState } from "react";
import { signup } from "~/app/signup/actions";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function SignupForm() {
  const [state, action, isPending] = useActionState(signup, undefined);

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-2xl">Sign up</CardTitle>
        <CardDescription>Only server validation</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action}>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" />
            </div>
            {state?.errors?.name && (
              <p className="text-sm text-red-500">{state.errors.name}</p>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="john@example.com" />
            </div>
            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
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
