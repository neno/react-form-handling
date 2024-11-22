"use client";

import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { NavItem } from "./nav-item";

export function Nav() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-2">
      <nav className="flex items-center justify-center gap-4">
        <NavItem
          title="Client"
          href="/client"
          isActive={currentPath === "/client"}
        />
        <Separator orientation="vertical" className="h-5 border-white" />
        <NavItem
          title="Server"
          href="/server"
          isActive={currentPath === "/server"}
        />
        <Separator orientation="vertical" className="h-5 border-white" />
        <NavItem
          title="Conform"
          href="/combined-conform"
          isActive={currentPath === "/combined-conform"}
        />
        <Separator orientation="vertical" className="h-5 border-white" />
        <NavItem
          title="ZSA"
          href="/combined-zsa"
          isActive={currentPath === "/combined-zsa"}
        />
      </nav>
      <Separator orientation="horizontal" className="border-white" />
    </div>
  );
  // return (
  //   <div className="flex flex-col gap-2">
  //     <nav className="flex items-center gap-4">
  //       <Link href="/client" className="">
  //         <Button variant="default" className="text-md">
  //           Client Side
  //         </Button>
  //       </Link>
  //       <NavItem
  //         title="Client Side"
  //         href="/client"
  //         isActive={currentPath === "/client"}
  //       />
  //       <Separator orientation="vertical" className="h-5 border-white" />
  //       <Link href="/server">
  //         <Button variant="ghost" className="text-md">
  //           Server Side
  //         </Button>
  //       </Link>
  //       <Separator orientation="vertical" className="h-5 border-white" />
  //       <Link href="/client-server">
  //         <Button variant="ghost" className="text-md">
  //           Combined
  //         </Button>
  //       </Link>
  //     </nav>
  //     <Separator orientation="horizontal" className="border-white" />
  //   </div>
  // );
}
