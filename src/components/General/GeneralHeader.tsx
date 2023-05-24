import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type generalHeader = {
  title: string;
  subTitle: string;
  browseTitle: string;
  route: string;
};

function GeneralHeader({ title, subTitle, browseTitle, route }: generalHeader) {
  return (
    <div>
      <h3 className="text-4xl font-medium">{title}</h3>
      <div className="flex justify-between">
        <p className="text-muted">{subTitle}</p>
        <Link
          href={route}
          className="flex items-center cursor-pointer hover:text-primary-green duration-300 transition transform ease-out"
        >
          <p>{browseTitle}</p>
          <BsArrowRightShort className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default GeneralHeader;
