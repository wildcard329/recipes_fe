import { useEffect } from "react";
import { useBool } from "../../utils/customhooks";
import { Spinner2 } from "../loader";
import "./ImageLoader.css";

const ImageLoader = ({ image, imgAlt }) => {
  const {
    isTruthy: isImgLoaded,
    setTruthy: setIsImgLoaded,
  } = useBool();

  setTimeout(() => {
    setIsImgLoaded();
  }, 1000);
  return(
    <>
      {!isImgLoaded ?
        <Spinner2 />
      :
      <img src={image} alt={imgAlt} className="load-image" loading="lazy" />}
  </>
  )
}

export default ImageLoader;
