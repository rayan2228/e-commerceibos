const Pagination = () => {
  return (
  
      <ul className="flex justify-center gap-5 mt-16 text-sm font-bold">
        <li className="pageList bg-[#C4CDD5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </li>
        <li className="border-black pageList">1</li>
        <li className="pageList">2</li>
        <li className="pageList">...</li>
        <li className="pageList">9</li>
        <li className="pageList">10</li>
        <li className="pageList">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
      </ul>
    
  );
};

export default Pagination;
