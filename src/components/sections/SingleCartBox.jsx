import { useCart } from "../../hooks/useCart";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
const SingleCartBox = ({ data }) => {
  const { updateQuantity, deleteItem } = useCart();
  return (
    <div className="border-b border-[#DEDEDE]">
      <Flex className={"items-center gap-4  justify-between text-[#0E0E0E]  "}>
        <Flex className={"border border-[#DEDEDE] p-3 gap-2 items-center "}>
          <button
            className="cursor-pointer"
            onClick={() => updateQuantity(data, true)}
            disabled={data.quantity === 1 ? true : false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <span className="text-xl font-semibold">{data.quantity}</span>
          <button
            className="cursor-pointer"
            onClick={() => updateQuantity(data)}
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </Flex>
        <div className={"w-24 h-24 bg-[#EAEAEA] rounded-2xl"}>
          <Image src={data.image} className={"w-full"} />
        </div>
        <h2 className="self-start text-base font-bold grow">{data.name}</h2>
        <button className="self-start" onClick={() => deleteItem(data.index)}>
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Flex>
      <p className="py-4 text-xl font-semibold text-right">
        {data.discounted || data.price}
      </p>
    </div>
  );
};

export default SingleCartBox;
