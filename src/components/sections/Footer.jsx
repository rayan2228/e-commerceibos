import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Image from "../ui/Image";
import List from "../ui/List";
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

const Footer = () => {
  return (
    <footer className="pt-20 pb-8 bg-black">
      <Container>
        <Flex >
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
      </Container>
    </footer>
  );
};

export default Footer;
