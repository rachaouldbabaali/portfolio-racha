import { Link } from "react-scroll/modules";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      activeClass="active"
      to={href}
      smooth={true}
      duration={500}
      spy={true}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      
    >
      {title}
    </Link>
  );
};

export default NavLink;