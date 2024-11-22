import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res: unknown = await request.json();
  console.log(res);

  // const body = { errors: { email: { message: "Email already taken." } } };

  // return new Response(JSON.stringify(body), { status: 400 });
  return NextResponse.json(
    { errors: { email: { message: "Email already taken." } } },
    { status: 500 },
  );
}
