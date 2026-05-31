import React, { useState } from "react";
import useStorage from "../Hooks/useStorage";

const UploadForm = () => {
  // state management-->
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // take startUpload func from custom hooks-->
  const { startUpload } = useStorage();

  // fuction to get the file data-->
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // store the data to selectedFile state-->
      setSelectedFile(e.target.files[0]);
    }
  };

  // create a submitHandler funct--> to upload file
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  if there is selected file then call uploadFile-->
    if (selectedFile) {
      // upload image
      startUpload(selectedFile);
    }
    // then change to default value-->
    setSelectedFile(null);
  };

  return (
    <div className="text-center mt-10">
      <form
        onSubmit={submitHandler}
        className="flex items-center flex-col gap-3"
      >
        <input
          type="file"
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
          onChange={fileChangeHandler}
        />
        {/* loading is built in class  ${Boolean(progress) && "loading"}*/}
        <button
          type="submit"
          className={`btn btn-accent`}
          disabled={!selectedFile}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
