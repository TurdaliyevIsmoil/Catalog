import Link from "./Link";
import { HiOutlineX } from "react-icons/hi";
function Menu({ mobile, toggleMenu }) {
  return (
    <menu
      className={`fixed lg:relative bg-[#000a] lg:bg-[#0000] lg:text-blue text-white w-screen h-screen inset-0 backdrop-blur flex flex-col lg:flex-row items-center overflow-hidden transition-height duration-300 top-0 justify-center lg:h-auto gap-5 lg:gap-8 ${
        mobile ? "h-screen" : "h-0"
      }`}
      onClick={toggleMenu}
    >
      <HiOutlineX
        className="absolute lg:hidden top-6 right-5 text-3xl"
      />
      <Link link="/" title="Home" />
      <Link link="/#services" title="Services" />
      <Link link="/subcatalogs" title="Products" />
      <Link link="#about" title="About" />
      <Link link="#why" title="Why Us" />
      <Link link="#catalogs" title="Catalogs" />
      <Link link="#news" title="News" />
    </menu>
  );
}
export default Menu;
