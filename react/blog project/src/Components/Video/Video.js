import React from "react";
import style from "./Video.module.css";
import { useParams } from "react-router";
import useUrl from "../../useHooks/use-Url";
import { useEffect } from "react";

const Video = () => {
  const params = useParams().id.slice(1);

  const { videoUrl, getUrl } = useUrl();

  useEffect(() => {
    getUrl(params);
  }, [getUrl, params]);

  return (
    <center className={style.video__box}>
      <iframe
        className={style.video}
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </center>
  );
};

export default Video;
