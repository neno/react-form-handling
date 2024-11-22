import { eq } from "drizzle-orm";
import "server-only";
import { db } from "~/server/db";
import { type InsertUser, type SelectUser, users } from "~/server/db/schema";

export async function getUserByEmail(
  email: string,
): Promise<SelectUser | undefined> {
  return await db.query.users.findFirst({
    where: eq(users.email, email),
  });
}

export async function createUser(
  user: InsertUser,
): Promise<{ id: number } | undefined> {
  const res = await db.insert(users).values(user).returning({ id: users.id });
  return res[0];
}
