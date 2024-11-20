import { SignupForm } from "~/components/signup-form";

export default function SignupPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="grid grid-cols-2 gap-36">
        <SignupForm />
        <div></div>
      </div>
    </div>
  );
}
