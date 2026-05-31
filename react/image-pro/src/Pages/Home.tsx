import Footer from "../Components/Footer";
import ImageGallary from "../Components/ImageGallary";
import Navbar from "../Components/Navbar";
import UploadForm from "../Components/UploadForm";

export const Home = () => {
  // nothing just a JSX code-->
  return (
    <div className="max-w-4xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallary />
      <Footer />
    </div>
  );
};

export default Home;
