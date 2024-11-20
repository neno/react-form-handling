import { z } from "zod";
import { sleep } from "~/lib/utils";

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

const SignupFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function signup(state: SignupFormState, formData: FormData) {
  // Simulate low network
  await sleep(2);

  // 1. Validate fields
  const validationResult = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  }
  // 2. Create user
  // 3. Create session
}
