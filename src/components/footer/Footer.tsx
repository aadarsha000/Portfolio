const Footer = () => {
  return (
    <div className="items-center justify-between rounded-lg px-[16px] py-[40px] mt-[40px] md:flex md:flex-row-reverse">
      <ul className="flex flex-wrap md:flex-nowrap">
        <li className="mr-[40px]">
          <a
            className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            Home
          </a>
        </li>
        <li className="mr-[40px]">
          <a
            className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            About
          </a>
        </li>
        <li className="mr-[40px]">
          <a
            className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff]"
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="text-center">
        <a className="text-[18px] font-[500] text-[#fff]" href="">
          Copyright @ 2024 <span className="text-[#9747ff]">Aadarsha</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
