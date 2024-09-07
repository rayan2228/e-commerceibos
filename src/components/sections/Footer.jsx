import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import List from "../ui/List";
import ListItem from "../ui/ListItem";
let aboutLinks = [
  "Master Plan",
  "Jobs",
  "Invest",
  "Pressroom",
  "Blog",
  "Contact",
];
let exploreLinks = [
  "Unlock my Robot Power",
  "Starlight",
  "Robot Platform",
  "Pressroom",
  "EEVE Roadmap",
];
let communityLinks = [
  "Willow X Community",
  "Developer & Maker Access",
  "Special Cases",
];
let copyWrite = ["March22 Recap", "Privacy Policy", "General Terms", "Contact"];

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 mt-10 bg-black">
      <Container>
        <Flex>
          <div className="w-1/2">
            <Image src={"/logoFooter.png"} />
          </div>
          <div className="text-lg font-semibold w-[15%]">
            <h2 className="mb-3 text-white">About US</h2>
            <List className={"text-[#81859F] flex flex-col gap-3"}>
              {aboutLinks.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </List>
          </div>
          <div className="text-lg font-semibold w-[15%]">
            <h2 className="mb-3 text-white">Explore EEVE</h2>
            <List className={"text-[#81859F] flex flex-col gap-3"}>
              {exploreLinks.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </List>
          </div>
          <div className="text-lg font-semibold w-[15%]">
            <h2 className="mb-3 text-white">Community & Support</h2>
            <List className={"text-[#81859F] flex flex-col gap-3"}>
              {communityLinks.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </List>
          </div>
        </Flex>
        <Flex className="border-[#252948] border-t mt-10 pt-10 items-center font-semibold">
          <List className={"flex gap-4 w-1/4"}>
            <li>
              <svg
                width={14}
                height={20}
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.15282 8.61043C1.33802 8.61043 1.16797 8.77035 1.16797 9.53635V10.9253C1.16797 11.6913 1.33802 11.8512 2.15282 11.8512H4.12251V17.4068C4.12251 18.1728 4.29256 18.3327 5.10736 18.3327H7.07705C7.89189 18.3327 8.06189 18.1728 8.06189 17.4068V11.8512H10.2736C10.8916 11.8512 11.0508 11.7383 11.2206 11.1797L11.6426 9.79077C11.9334 8.83385 11.7542 8.61043 10.6956 8.61043H8.06189V6.29565C8.06189 5.78427 8.5028 5.36972 9.04672 5.36972H11.8498C12.6646 5.36972 12.8346 5.20984 12.8346 4.44379V2.59194C12.8346 1.82589 12.6646 1.66602 11.8498 1.66602H9.04672C6.32714 1.66602 4.12251 3.73877 4.12251 6.29565V8.61043H2.15282Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.51074 9.99772C2.51074 6.26577 2.51074 4.3998 3.67011 3.24042C4.82948 2.08105 6.69546 2.08105 10.4274 2.08105C14.1593 2.08105 16.0253 2.08105 17.1847 3.24042C18.3441 4.3998 18.3441 6.26577 18.3441 9.99772C18.3441 13.7296 18.3441 15.5956 17.1847 16.7551C16.0253 17.9144 14.1593 17.9144 10.4274 17.9144C6.69546 17.9144 4.82948 17.9144 3.67011 16.7551C2.51074 15.5956 2.51074 13.7296 2.51074 9.99772Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1787 10C14.1787 12.0711 12.4998 13.75 10.4287 13.75C8.35764 13.75 6.67871 12.0711 6.67871 10C6.67871 7.92893 8.35764 6.25 10.4287 6.25C12.4998 6.25 14.1787 7.92893 14.1787 10Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                />
                <path
                  d="M15.0182 5.41553H15.0107"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>

            <li>
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.35693 17.5L9.64727 11.2097M9.64727 11.2097L3.35693 2.5H7.5236L12.0666 8.79033M9.64727 11.2097L14.1903 17.5H18.3569L12.0666 8.79033M18.3569 2.5L12.0666 8.79033"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            <li>
              <svg
                width={21}
                height={20}
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.03695 7.91589H3.62028C2.8346 7.91589 2.44177 7.91589 2.19769 8.15997C1.95361 8.40406 1.95361 8.79689 1.95361 9.58256V16.6659C1.95361 17.4516 1.95361 17.8444 2.19769 18.0885C2.44177 18.3326 2.8346 18.3326 3.62028 18.3326H4.03695C4.82262 18.3326 5.21545 18.3326 5.45954 18.0885C5.70361 17.8444 5.70361 17.4516 5.70361 16.6659V9.58256C5.70361 8.79689 5.70361 8.40406 5.45954 8.15997C5.21545 7.91589 4.82262 7.91589 4.03695 7.91589Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                />
                <path
                  d="M5.70361 3.54089C5.70361 4.57643 4.86415 5.41589 3.82861 5.41589C2.79308 5.41589 1.95361 4.57643 1.95361 3.54089C1.95361 2.50536 2.79308 1.66589 3.82861 1.66589C4.86415 1.66589 5.70361 2.50536 5.70361 3.54089Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                />
                <path
                  d="M10.5586 7.91589H9.87028C9.08461 7.91589 8.69178 7.91589 8.44769 8.15997C8.20361 8.40406 8.20361 8.79689 8.20361 9.58256V16.6659C8.20361 17.4516 8.20361 17.8444 8.44769 18.0885C8.69178 18.3326 9.08461 18.3326 9.87028 18.3326H10.2869C11.0726 18.3326 11.4654 18.3326 11.7095 18.0885C11.9536 17.8444 11.9536 17.4516 11.9536 16.6659L11.9537 13.7493C11.9537 12.3686 12.3937 11.2493 13.6935 11.2493C14.3434 11.2493 14.8703 11.809 14.8703 12.4993V16.2493C14.8703 17.035 14.8703 17.4278 15.1144 17.6719C15.3584 17.916 15.7513 17.916 16.5369 17.916H16.9525C17.738 17.916 18.1308 17.916 18.3749 17.672C18.6189 17.428 18.619 17.0352 18.6192 16.2497L18.6204 11.6661C18.6204 9.59506 16.6506 7.91609 14.7009 7.91609C13.591 7.91609 12.6009 8.46014 11.9537 9.31089C11.9536 8.78581 11.9536 8.52331 11.8396 8.32839C11.7674 8.20494 11.6645 8.10217 11.5411 8.02995C11.3462 7.91589 11.0837 7.91589 10.5586 7.91589Z"
                  stroke="#DFDFDF"
                  strokeWidth="1.42857"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </List>
          <List className={"text-[#81859F]  flex gap-3 w-1/2 justify-center"}>
            {copyWrite.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </List>
          <Flex className="items-center w-1/4 text-[#81859F] gap-2 justify-end">
            <Image src={"/flag.png"} />
            <p>United States (English)</p>
          </Flex>
        </Flex>
        <p className="text-center text-[#323544] mt-10 ">EEVE © 2024. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
