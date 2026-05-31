import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "./useAuth";

// to use the firebase Use Storage we used custom hooks-->
const useStorage = () => {
  // state management and their types-->
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  // get user from useAuth custom hooks-->
  const { user } = useAuth();

  // create a start upload func--> it takes File by default
  const startUpload = (file: File) => {
    // if there is no file then it returns nothing-->
    if (!file) {
      return;
    }

    // we use uuid for unique id-->
    const fileId = uuidv4();
    console.log(fileId);
    console.log(file.type);

    // we takes fileformat for given file by the user-->
    const fileFormat = file.type.split("/")[1];
    console.log(fileFormat);

    // name of the file--> built in func takes storage and ( foldername/filename.filetype )
    const storageRef = ref(storage, `images/${fileId}.${fileFormat}`);

    // upload to storage-->
    const uploadTask = uploadBytesResumable(storageRef, file);

    // no need to worry just copy and paste ( showing progress )
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // we assigned progress state-->
        setProgress(progress);
      },
      (error) => {
        // if error occur we assigned to error state-->
        setError(error);
      },
      // also built in func to get the url of our file-->
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // assigned url to our url state-->
        setUrl(downloadURL);
        console.log("File available at", downloadURL);

        // store data to firebase--> ( very important )
        // we store data to db and in images folder--> takes two para 1. firebase db(built in) and 2. folder name
        await addDoc(collection(db, "images"), {
          // we assigned the propery of the collection-->
          imageUrl: downloadURL,
          createdAt: new Date(),
          userEmail: user?.email,
        });
      }
    );
  };
  return {
    progress,
    error,
    url,
    startUpload,
  };
};

export default useStorage;
