import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { SignupFormSchema } from "~/types/users";

export async function signupWithConform(state: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: SignupFormSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  if (submission.payload.email === "neno@neno.ch") {
    return submission.reply({
      // payload: submission.payload,

      formErrors: ["Invalid form data."],
      fieldErrors: { email: ["Email already taken."] },
    });
  }

  redirect("/success");
}
