import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { SignupFormSchema } from "~/types/users";

export async function signupWithConform(state: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: SignupFormSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect("/success");
}
