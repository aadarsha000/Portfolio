import Link from "next/link";

const Footer = () => {
  return (
    <div className="items-center justify-between rounded-lg px-[16px] py-[40px] mt-[40px] md:flex md:flex-row-reverse">
      <ul className="flex flex-wrap md:flex-nowrap">
        <li className="mr-[20px] md:mr-[40px]">
          <Link
            className="text-[14px] md:text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-[20px] md:mr-[40px]">
          <Link
            className="text-[14px] md:text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            About
          </Link>
        </li>
        <li className="mr-[20px] md:mr-[40px]">
          <Link
            className="text-[14px] md:text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-[14px] md:text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="text-center">
        <Link className="text-[18px] font-[500] text-[#fff]" href="">
          Copyright @ 2024 <span className="text-[#9747ff]">Aadarsha</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
