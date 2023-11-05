import Link from "next/Link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      activeClass="active"
      to={href}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;