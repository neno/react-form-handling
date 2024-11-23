"use server";

import { redirect } from "next/navigation";
import { ZSAError, createServerAction } from "zsa";
import { SignupFormSchema } from "~/types/users";

export const signup = createServerAction()
  .input(SignupFormSchema)
  .handler(async ({ input }) => {
    if (input.email === "neno@neno.ch") {
      throw new ZSAError("INPUT_PARSE_ERROR", {
        inputParseErrors: { email: "Email already taken." },
      });
    }

    redirect("/success");
  });
