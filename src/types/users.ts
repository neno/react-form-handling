import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(256, "Name cannot contain more than 256 characters"),
  email: z
    .string({ message: "Email is required" })
    // .min(1, "Email is required")
    .max(256, "Email must contain at most 256 characters")
    .email(),
  password: z
    .string()
    .min(8, "Password must contain at leat 8 characters")
    .max(256, "Password must contain at most 256 characters"),
});

export type SignupFormSchema = z.infer<typeof SignupFormSchema>;
