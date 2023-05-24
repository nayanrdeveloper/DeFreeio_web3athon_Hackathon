import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-header-background object-contain h-[35rem] w-full bg-[#8B8B8B]">
      <div className="flex flex-col items-center justify-center mx-auto h-full space-y-5">
        <p className="text-5xl font-medium text-white w-[40rem] text-center">
          With talented freelancers do more work.
        </p>
        <p className="text-white">
          Millions of people use freeio.com to turn their ideas into reality.
        </p>
        <div className="flex space-x-2 items-center">
          <Link href={"/projects"}>
            <button className="btn-primary">Find Work</button>
          </Link>
          <Link href={"freelancers"}>
            <button className="btn-secondary">Find Talent</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
