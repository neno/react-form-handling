import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { z } from "zod";
// import { SignupFormSchema } from "~/types/users";

const SignupFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(256, "Name cannot contain more than 256 characters"),
  email: z
    .string()
    .min(20, "Email must contain at most 256 characters")
    .email(),
  password: z
    .string()
    .min(8, "Password must contain at leat 8 characters")
    .max(256, "Password must contain at most 256 characters"),
});

export async function signupWithConform(state: unknown, formData: FormData) {
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
