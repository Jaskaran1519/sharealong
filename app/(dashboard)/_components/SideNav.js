"use client";

import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SideNav = ({ menu, toggleMenu }) => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState();
  const router = useRouter();

  return (
    <div className="shadow-sm border-r h-full ">
      <div className="p-5 border-b ">
        <Image src="/logo.svg" width={150} height={100} alt="logo" />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            key={index}
            className={`flex gap-2 p-4 px-8 hover:bg-gray-100 w-full text-gray-500 ${
              activeIndex == index ? "bg-gray-50 text-primary" : null
            } `}
            onClick={() => {
              setActiveIndex(index);
              router.push(item.path);
              if (toggleMenu) toggleMenu();
            }}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
      <h1
        className="text-right fone-semibold text-gray-600 p-5 mt-5 md:hidden"
        onClick={toggleMenu}
      >
        Close
      </h1>
    </div>
  );
};

export default SideNav;
