const Input = ({ label, type, name, className = null, ...attributes }) => {
  return (
    <div className={`${className} relative `}>
      <label htmlFor={name} className="absolute text-xs text-tSecondary top-3 left-3">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...attributes}
        className={"pb-5 pt-8 px-3 outline-none border border-[#DEDEDE] text-sm w-full bg-white" }
      />
    </div>
  );
};

export default Input;
