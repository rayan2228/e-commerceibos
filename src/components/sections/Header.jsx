import Container from "../ui/Container";
import Image from "../ui/Image";
import List from "../ui/List";
import ListItem from "../ui/ListItem";
import Flex from "../ui/Flex";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
let links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Categories",
    link: "/categories",
  },
  {
    name: "Custom",
    link: "/custom",
  },
  {
    name: "Blog",
    link: "/Bbog",
  },
];

const Header = () => {
  const { cart } = useCart();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const handleGoToCart = () => {
    if (Object.keys(auth).length) {
      navigate("/carts");
    } else {
      navigate("/login");
    }
  };
  console.log(cart);
  
  return (
    <header className="py-10 border border-b-[#F1F1F1] cShadow">
      <Container>
        <Flex className={"items-center"}>
          <div className="w-1/4">
            <Image src={"/logo.png"} />
          </div>
          <nav className="w-1/2">
            <List className={"flex justify-center gap-5 "}>
              {links.map(({ name, link }) => (
                <ListItem
                  list={name}
                  link={link}
                  key={name}
                  className={"font-medium text-lg  "}
                />
              ))}
            </List>
          </nav>
          <Flex className="items-center justify-end w-1/4 gap-5">
            <div className="relative cursor-pointer" onClick={handleGoToCart}>
              <svg
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.15865 22.6925L3.5539 13.1197C3.31126 11.6724 3.18995 10.9487 3.57843 10.4743C3.96693 10 4.68094 10 6.10898 10H25.8807C27.3087 10 28.0227 10 28.4112 10.4743C28.7996 10.9487 28.6783 11.6724 28.4357 13.1197L26.8309 22.6925C26.2991 25.8655 26.0331 27.4519 24.9472 28.3927C23.8615 29.3333 22.2961 29.3333 19.1657 29.3333H12.8239C9.69341 29.3333 8.12816 29.3333 7.04232 28.3927C5.95648 27.4519 5.69054 25.8655 5.15865 22.6925Z"
                  stroke="#323232"
                  strokeWidth="3"
                />
                <path
                  d="M23.3385 9.99935C23.3385 5.94926 20.0553 2.66602 16.0052 2.66602C11.9551 2.66602 8.67188 5.94926 8.67188 9.99935"
                  stroke="#323232"
                  strokeWidth="3"
                />
                <rect
                  x="17"
                  y="18"
                  width="16"
                  height="16"
                  rx="8"
                  fill="#323232"
                />
              </svg>
              <span className="absolute text-xs text-white bottom-0 right-0 translate-x-[-80%] ">
                {cart.length}
              </span>
            </div>
            <div>
              <Image src={"/user.png"} />
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
