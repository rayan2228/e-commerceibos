import Flex from "../ui/Flex";
import Image from "../ui/Image";
import Button from "../ui/Button";

const SingleProduct = ({ data }) => {
  console.log(data);

  return (
    <div className="w-[315px] border border-[#F1F1F1] rounded-2xl p-4">
      <Flex className="bg-[#F2F2F2] justify-center items-center p-4 rounded-lg">
        <Image src={data.image} />
      </Flex>
      <Flex className={"flex-col gap-4 my-8"}>
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <Flex className={"text-lg gap-4"}>
          {data.discountedPrice && (
            <p className="font-bold">{data.discountedPrice}</p>
          )}
          <p className="line-through font-medium text-[#ABABAB]">
            {data.price}
          </p>
          <p className="font-semibold text-[#B92E2E]">
            {data.discountPercentage}% OFF
          </p>
        </Flex>
        <p className="text-[#838383] text-sm">{data.description}</p>
      </Flex>
      <Button
        text={"Add to cart"}
        className={"btn w-full flex justify-center items-center gap-4"}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.18982 12.7641L2.28715 7.37937C2.15067 6.56522 2.08243 6.15815 2.30095 5.89133C2.51948 5.62451 2.92111 5.62451 3.72439 5.62451H14.846C15.6492 5.62451 16.0508 5.62451 16.2694 5.89133C16.4879 6.15815 16.4196 6.56522 16.2832 7.37937L15.3805 12.7641C15.0813 14.5488 14.9317 15.4412 14.3209 15.9704C13.7102 16.4995 12.8297 16.4995 11.0688 16.4995H7.50152C5.74063 16.4995 4.86018 16.4995 4.24939 15.9704C3.63861 15.4412 3.48901 14.5488 3.18982 12.7641Z"
            stroke="white"
            strokeWidth="1.6875"
          />
          <path
            d="M13.4062 5.62598C13.4062 3.3478 11.5594 1.50098 9.28125 1.50098C7.00307 1.50098 5.15625 3.3478 5.15625 5.62598"
            stroke="white"
            strokeWidth="1.6875"
          />
        </svg>
      </Button>
    </div>
  );
};

export default SingleProduct;
