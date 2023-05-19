import { NavItemType } from "@/types";
import Link from "next/link";
import React from "react";

function NavItem({ id, name, route }: NavItemType) {
  return (
    <li>
      <Link href={route} className="px-3 py-2 hover:text-primary-green transition transform duration-300 ease-in">{name}</Link>
    </li>
  );
}

export default NavItem;
