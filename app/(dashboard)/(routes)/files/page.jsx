import React from "react";
import { UserButton } from "@clerk/nextjs";

const files = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default files;
