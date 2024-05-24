"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify, Cross, CrossIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import SideNav from "./SideNav";

const TopHeader = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end">
      <div className="md:hidden">
        {!menu ? (
          <AlignJustify
            className="md:hidden z-50"
            onClick={() => {
              toggleMenu();
            }}
          />
        ) : null}
      </div>
      {menu && (
        <div className="w-64 h-screen absolute top-0 left-0 bg-white  z-10">
          <SideNav menu={menu} toggleMenu={toggleMenu} />{" "}
        </div>
      )}

      {/* <Image
        src="/logo.svg"
        width={150}
        height={100}
        alt="logo"
        className="md:hidden"
      /> */}
      <UserButton />
    </div>
  );
};

export default TopHeader;
