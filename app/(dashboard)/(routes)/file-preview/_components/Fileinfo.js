"use client";
import { File } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Fileinfo = ({ file }) => {
  const [fileType, setFileType] = useState();
  useEffect(() => {
    file && setFileType(file?.fileType.split("/")[0]);
    console.log(fileType);
  }, [file]);
  return (
    file && (
      <div className="text-center  border flex justify-center m-4 flex-col items-center p-2 rounded-xl border-gray-400">
        {file?.fileType == "image" ? (
          <Image
            src={fileType == "image" ? file?.fileUrl : "/file.png"}
            alt="Your image"
            width={200}
            height={200}
            className="h-[200px] rounded-md object-contain"
          />
        ) : (
          <File size={200} className="text-primary" />
        )}
        <div className="">
          <h2>{file.fileName}</h2>
          <h2 className="text-gray-400 text-[13px]">{file.fileType}</h2>
        </div>
      </div>
    )
  );
};

export default Fileinfo;
