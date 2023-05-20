import { FooterSocialType } from "@/types";
import Link from "next/link";
import React from "react";

function FooterSocialItem({ id, name, icon, route }: FooterSocialType) {
  const Icon = icon;
  return (
    <li title={name}>
      <Link href={route} className="text-white font-medium">
        <Icon className="w-10 h-10 p-2 rounded-full hover:bg-[#393939]" />
      </Link>
    </li>
  );
}

export default FooterSocialItem;
