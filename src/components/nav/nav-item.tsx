import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";

type NavItemProps = {
  title: string;
  href: string;
  isActive: boolean;
};

export function NavItem({ title, href, isActive }: NavItemProps) {
  return (
    <Link href={href} className="">
      <Button
        variant={isActive ? "default" : "ghost"}
        className={cn("text-md", isActive ? "dark" : "")}
      >
        {title}
      </Button>
    </Link>
  );
}
