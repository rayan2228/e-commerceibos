const Button = ({ className, text, children, ...attributes }) => {
  return (
    <button className={className} {...attributes}>
      {children}
      {text}
    </button>
  );
};

export default Button;
