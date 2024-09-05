const Image = ({ src, alt = "image", className = null, ...attributes }) => {
  return (
    <picture>
      <img src={src} alt={alt} className={className} {...attributes} />
    </picture>
  );
};

export default Image;
