"use server";

import { sleep } from "~/lib/utils";
import { redirect } from "next/navigation";
import { SignupFormSchema } from "~/types/users";

type SignupFormState =
  | {
      errors: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

const schemaKeys = Object.entries(SignupFormSchema.shape).flatMap(
  ([key, _value]) => key,
);

export async function signup(state: SignupFormState, formData: FormData) {
  // Simulate low network
  await sleep(2);

  // save original form data for returning on error and populating the form with default values
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && schemaKeys.includes(key)) {
      fields[key] = value;
    }
  }

  // 1. Validate fields
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    console.log("fields", fields);

    return {
      errors: validationResult.error.flatten().fieldErrors,
      fields,
    };
  }
  // 2. Create user
  // 3. Create session

  redirect("/success");
}
