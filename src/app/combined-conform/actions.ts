import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { z } from "zod";
import { sleep } from "~/lib/utils";

// Zod validation works differently in conform than in react-hook-form
// In conform you don't need to specify a "min(1)" for required
const SignupFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .max(256, "Name cannot contain more than 256 characters"),
  email: z
    .string({ message: "Email is required" })
    .max(256, "Email must contain at most 256 characters")
    .email(),
  password: z
    .string({ message: "Password must contain at leat 8 characters" })
    .min(8, "Password must contain at leat 8 characters")
    .max(256, "Password must contain at most 256 characters"),
});

export async function signupWithConform(state: unknown, formData: FormData) {
  await sleep(2);
  const submission = parseWithZod(formData, { schema: SignupFormSchema });

  if (submission.status !== "success") {
    return submission.reply({ resetForm: false });
  }

  if (submission.payload.email === "neno@neno.ch") {
    return submission.reply({
      fieldErrors: { email: ["Email already taken."] },
    });
  }

  redirect("/success");
}
