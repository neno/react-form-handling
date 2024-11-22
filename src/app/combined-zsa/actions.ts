"use server";

import { createServerAction } from "zsa";
import { SignupFormSchema } from "~/types/users";

export const signup = createServerAction()
  .input(SignupFormSchema)
  .handler(async ({ input }) => {
    console.log("input", input);
    return { success: true };
  });
