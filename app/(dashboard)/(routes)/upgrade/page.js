import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 text-4xl font-semibold text-gray-700">
        Coming soon
      </div>
      <Link href="/">
        <div className="mt-[5vh] text-lg text-gray-400 flex justify-center items-center text-right underline">
          Return to Home
        </div>
      </Link>
    </div>
  );
};

export default page;
