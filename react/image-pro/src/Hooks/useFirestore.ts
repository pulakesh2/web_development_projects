import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

// the type of array we intialize-->
type Image = {
  createdAt: Date;
  userEmail: String;
  imageUrl: String;
};

// for getting the data we use this custom hooks from the storage--> it takes collection name
const useFirestore = (collectionName: string) => {
  // state management -->
  const [docs, setDocs] = useState<Image>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // when data from collectionname is changed then this func will execute-->
  useEffect(() => {
    // create a null function-->
    let unsubscribe: () => void;

    // get data from firbase storage-->
    const getData = async () => {
      try {
        // built in func--> takes db and collectionName
        const q = query(
          collection(db, collectionName),
          orderBy("createdAt", "desc")
        );
        // this will get the actual data-->
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          // create and image array-->
          const images: Image[] = [];
          // loop over the querySnapshot-->
          querySnapshot.forEach((doc) => {
            // images.push(doc.data());
            // each doc.data() has our real data--> we assigned to different variable
            const imageUrl = doc.data().imageUrl;
            const createdAt = doc.data().createdAt.toDate();
            const userEmail = doc.data().userEmail;

            // store in images array in obj -->
            images.push({ imageUrl, createdAt, userEmail });
          });
          // assigned to docs state-->
          setDocs(images);
          // isLoading to false-->
          setIsLoading(false);
        });
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };

    // call it-->
    getData();

    return () => unsubscribe && unsubscribe();
  }, [collectionName]);

  // return docs and isLoading-->
  return {
    docs,
    isLoading,
  };
};

export default useFirestore;
