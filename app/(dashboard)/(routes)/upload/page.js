"use client";
import React, { useEffect, useState } from "react";
import UploadForm from "./_components/UploadForm";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../../../firebaseConfig";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "./../../../_utils/GenerateRandomString";
import { useRouter } from "next/navigation";

const upload = () => {
  const { user } = useUser();
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [progress, setProgress] = useState();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const router = useRouter();

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
    });
  };

  const saveInfo = async (file, fileUrl) => {
    const docId = generateRandomString().toString();

    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      userEmail: user.primaryEmailAddress.emailAddress,
      username: user.fullName,
      password: "",
      id: docId,
      shorturl: process.env.NEXT_PUBLIC_BASE_URL + "f/" + docId,
    });
    router.push("/file-preview/" + docId);
  };

  useEffect(() => {
    progress == 100 &&
      setTimeout(() => {
        setUploadCompleted(true);
      }, 1000);
  }, [progress == 100]);

  useEffect(() => {
    uploadCompleted &&
      setTimeout(() => {
        setUploadCompleted(false);
      }, 1000);
  }, [uploadCompleted == true]);
  return (
    <div className="p-5 px-8 md:">
      <h2 className="text-[20px] text-center m-5 text-gray-600 ">
        Start
        <strong className="text-[20px]  text-gray-800"> Uploading </strong>
        File and <strong className="text-[20px]  text-gray-800">Share </strong>
        it
      </h2>
      <UploadForm
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress}
      />
    </div>
  );
};

export default upload;
