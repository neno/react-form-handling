import { SignupForm } from "./_components/signup-form";

export default function CombinedConformPage() {
  return (
    <>
      <h1 className="text-3xl">
        Combined client and server validation with conform
      </h1>
      <p>Using react-hook-form</p>
      <SignupForm />
    </>
  );
}
