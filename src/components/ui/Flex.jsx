const Flex = ({ className = null, children }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Flex;
