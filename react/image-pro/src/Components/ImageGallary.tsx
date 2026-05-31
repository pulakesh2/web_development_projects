import useFirestore from "../Hooks/useFirestore";
import style from "./ImageGallary.module.css";

const ImageGallary = () => {
  // must have collection name--> get the data from images collectionName
  const { docs: images, isLoading } = useFirestore("images");
  console.log(images);

  //  if it is true -->
  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // if it is false--> we map the array and use them in our JSX code-->
  return (
    <div
      className={`grid md:grid-cols-3 jutify-center gap-4 mt-10  ${style.img__container}`}
    >
      {images.map((image) => (
        <div
          key={image.imageUrl}
          className={`card card-compact w-full bg-base-100 shadow-xl ${style.card__box}`}
        >
          <figure>
            <img src={image.imageUrl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Upload By : {image.userEmail}</p>
            {/* <p>Created On: {image.createdAt.toLocalDateString()}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallary;
