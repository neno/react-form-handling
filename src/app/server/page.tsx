import { SignupForm } from "./_components/signup-form";

export default function ServerPage() {
  return (
    <>
      <h1 className="text-3xl">Server side validation using server actions</h1>
      <p>Using react-hook-form</p>
      <SignupForm />
    </>
  );
}
