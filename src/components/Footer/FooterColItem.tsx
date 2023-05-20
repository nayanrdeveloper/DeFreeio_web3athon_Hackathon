import { FooterType } from "@/types";
import React from "react";
import FooterItem from "./FooterItem";

function FooterColItem({ id, header, footerItems }: FooterType) {
  return (
    <div>
      <h6 className="text-white font-semibold text-xl">{header}</h6>
      <ul className="space-y-5 mt-5">
        {footerItems.map((footerItem) => {
          return (
            <FooterItem
              key={footerItem.id}
              id={footerItem.id}
              name={footerItem.name}
              route={footerItem.route}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default FooterColItem;
