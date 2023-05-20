import { FooterItemType } from "@/types";
import Link from "next/link";
import React from "react";

function FooterPrivacyItem({ id, name, route }: FooterItemType) {
  return (
    <li>
      <Link href={route} className="text-white font-medium">
        {name}
      </Link>
    </li>
  );
}

export default FooterPrivacyItem;
