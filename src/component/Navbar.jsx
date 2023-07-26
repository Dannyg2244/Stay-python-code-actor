import { BsFillTelephoneFill, BsClock, BsInstagram } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex justify-between px-20 border-t border-b border-[#D9D9D9]">
      <div className="flex text-[13px] font-bold items-center">
        <p className="flex items-center gap-2 border-l border-r border-[#D9D9D9] py-3 px-4">
          <BsFillTelephoneFill className="text-[#F56411]" />
          <span>(+234) 804 909 000</span>
        </p>
        <p className="flex items-center gap-2 border-l border-r border-[#D9D9D9] py-3 px-4">
          <BiEnvelope className="text-[#F56411] text-[18px]" />
          <span>info@triber-group.com</span>
        </p>
        <p className="flex items-center gap-2 border-l border-r border-[#D9D9D9] py-3 px-4">
          <BsClock className="text-[#F56411] text-[17px]" />
          <span>Mon - Fri: 8:00 - 22:00</span>
        </p>
      </div>

      <div className="flex items-center border-l border-r border-[#D9D9D9]">
        <Link className="border-r px-3 text-[#F56411]">
          <RiFacebookFill />
        </Link>
        <Link className="border-l border-r px-3 text-[#F56411]">
          <BsInstagram />
        </Link>
        <Link className="border-l border-r px-3 text-[#F56411]">
          <IoLogoTwitter />
        </Link>
        <Link className="border-l border-r px-3 text-[#F56411]">
          <FiSearch />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
