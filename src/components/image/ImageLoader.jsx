import "./ImageLoader.css";

const ImageLoader = ({ image, imgAlt }) =>
  <img src={image} alt={imgAlt} className="load-image" loading="lazy" />

export default ImageLoader;
