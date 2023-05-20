import { FooterItemType } from "@/types";
import Link from "next/link";
import React from "react";

function FooterItem({ id, name, route }: FooterItemType) {
  return (
    <li>
      <Link href={route} className="text-[#FFFFFFA1] hover:text-white transition transform duration-300 ease-out">
        {name}
      </Link>
    </li>
  );
}

export default FooterItem;
