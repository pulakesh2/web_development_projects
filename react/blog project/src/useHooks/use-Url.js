import { useState } from "react";

const useUrl = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const getUrl = (params) => {
    if (params === "the subtle art of not giving a fuck") {
      setVideoUrl(
        "https://www.youtube.com/embed/lz8sUiXAnbs?si=3Z5UkKad0OGm7Lxf&amp;controls=0"
      );
    } else if (params === "everything is fuck") {
      setVideoUrl(
        "https://www.youtube.com/embed/fEk5dhbNU70?si=qsVUimvaoZd7XgOL&amp;controls=0"
      );
    } else if (params === "the psychology of money") {
      setVideoUrl(
        "https://www.youtube.com/embed/DpyMvwF4OSE?si=SLFl1CW8O7MjDLQz&amp;controls=0"
      );
    } else if (params === "the courage to be disliked") {
      setVideoUrl(
        "https://www.youtube.com/embed/vB1SU3XTd1I?si=lOW_3jAI3c4nV8DR&amp;controls=0"
      );
    } else if (params === "atomic habits") {
      setVideoUrl(
        "https://www.youtube.com/embed/CmcmxPXyDuM?si=czGX745fJ7z0ggFQ&amp;controls=0"
      );
    } else if (params === "ikigai") {
      setVideoUrl(
        "https://www.youtube.com/embed/3UNFI4ru7SE?si=qO1G3i0FfEmpqq64&amp;controls=0"
      );
    } else {
      setVideoUrl("");
    }
  };

  return {
    videoUrl,
    getUrl,
  };
};

export default useUrl;
