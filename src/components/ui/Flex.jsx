const Flex = ({ className = null,style, children }) => {
  return <div className={`flex ${className}`} style={style}>{children}</div>;
};

export default Flex;
