const Button = ({ className ,text, ...attributes }) => {
  return (
    <button className={className} {...attributes}>
      {text}
    </button>
  );
};

export default Button;
