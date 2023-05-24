import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="">
      <div className="flex justify-between px-4 py-2">
        <div className="flex space-x-3 items-center">
          <Link href={"/"}>
          <div className="relative w-28 h-20">
            <Image src={"/logo.png"} alt={"logo"} fill />
          </div>
          </Link>
          <ul className="flex">
            {navItems.map(({ id, name, route }) => {
              return <NavItem key={id} id={id} name={name} route={route} />;
            })}
          </ul>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="relative h-12 w-12">
            <Image src={'/user.jpg'} alt={'user'} fill className="rounded-full" />
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-medium">Nayan Radadiya</h3>
            <span>000e....675434</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
