import { useRef } from "react";
import { useBool } from "../../utils/customhooks";
import { Spinner2 } from "../loader";
import "./ImageLoader.css";

const ImageLoader = ({ image, imgAlt }) => {
  const {
    isTruthy: isImgLoaded,
    setTruthy: setIsImgLoaded,
  } = useBool();
  const imgRef = useRef();
  
  const showImage = () => {
    imgRef.current.classList.remove("unloaded-image");
    imgRef.current.classList.add("loaded-image");
  };

  setTimeout(() => {
    setIsImgLoaded();
  }, 1000);
  return(
    <>
      {!isImgLoaded ?
        <Spinner2 />
      :
      <img ref={imgRef} onLoad={showImage} src={image} alt={imgAlt} className="load-image unloaded-image" loading="lazy" />}
  </>
  )
}

export default ImageLoader;
