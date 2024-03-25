"use client";
import { FaPython } from "react-icons/fa6";
import { SiDjango, SiFlask, SiFastapi, SiReact } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeroSection = () => {
  const router = useRouter();
  const skills = [
    "Python",
    "Django",
    "FastApi",
    "Flask",
    "Javascript",
    "ReactJs",
    "NextJs",
  ];
  const skill_logos = [
    <FaPython key={1} className="text-white" />,
    <SiDjango key={2} className="text-white" />,
    <SiFastapi key={3} className="text-white" />,
    <SiFlask key={4} className="text-white" />,
    <TbBrandJavascript key={5} className="text-white" />,
    <SiReact key={6} className="text-white" />,
    <TbBrandNextjs key={7} className="text-white" />,
  ];
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-6 lg:gap-2 mt-[30px]">
      <div className="grid grid-cols-3 gap-2 lg:col-span-4">
        <div className="col-span-3 grid grid-cols-1 gap-2 lg:col-span-1">
          <div className="col-span-1">
            <div className="flex w-full flex-col rounded-lg border-2 border-[#2b2b2b] border-solid bg-[#151517] p-[32px]">
              <div className="relative mx-auto inline-block">
                <img
                  className="animate-[spin_15s_linear_infinite]"
                  src="https://bentox-vue.vercel.app/assets/bio-round-text-Bub6T51j.png"
                  alt=""
                />
                <div></div>
                <img
                  className="absolute left-[15%] top-[12%] lg:left-[10%] lg:top-[10%] w-[150px] rounded-full bg-[#9747ff]"
                  src="/assests/profile.png"
                  alt=""
                />
              </div>
              <div className="mt-[32px] flex items-center justify-center">
                <Link
                  href="/about"
                  className="flex items-center rounded-lg bg-[#9747ff] px-[24px] py-[12px] text-base font-[500] text-[#fff]"
                >
                  <span className="mr-1">I&apos;m Aadarsha</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="primary-button-icon"
                  >
                    <g>
                      <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z" />
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="mt-[29px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>Biography</span>
                </div>
                <Link className="h-[44px] w-[80px]" href="/about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg bg-[#151517] p-[20px] border-2 border-[#2b2b2b] lg:py-[40px]">
              <div>
                <p className="text-[20px] font-[500] text-[#fff] lg:text-[24px]">
                  Articles &amp;
                </p>
                <p className="ml-[38px] text-[20px] font-[500] text-[#fff] lg:text-[24px]">
                  Publications
                </p>
              </div>
              <div className="mt-[38px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>All Blogs</span>
                </div>
                <a className="h-[44px] w-[80px]" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-2 lg:col-span-2">
          <div className="col-span-2 lg:col-span-1">
            <div className="rounded-lg bg-[#151517] px-[20px] py-[40px] border-2 border-[#2b2b2b]">
              <div>
                <p className="text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                  FullStack
                </p>
                <p className="ml-[38px] text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                  Developer
                </p>
              </div>
              <div className="mt-[38px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>Get in touch</span>
                </div>
                <a className="h-[44px] w-[80px]" href="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="rounded-lg bg-[#151517] p-[30px] border-2 border-[#2b2b2b]">
              <div className="flex justify-center gap-10">
                <a
                  className="rounded-full border p-[24px] lg:p-[12px] xl:p-[24px] text-[#fff] hover:border-[#9747ff] hover:text-[#9747ff]"
                  href="https://np.linkedin.com/in/aadarshakarki10"
                >
                  <CiLinkedin className="w-[40px] h-[40px]" />
                </a>
                <a
                  className="rounded-full border p-[24px] lg:p-[12px] xl:p-[24px] text-[#fff] hover:border-[#9747ff] hover:text-[#9747ff]"
                  href="https://github.com/aadarsha000"
                >
                  <SiGithub className="w-[40px] h-[40px]" />
                </a>
              </div>
              <div className="mt-[38px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>Profiles</span>
                </div>
                <Link className="h-[44px] w-[80px]" href="/about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="rounded-lg border-2 border-solid bg-[#151517] p-[20px] lg:p-[32px] border-[#2b2b2b]">
              <span className="text-[24px] font-[500] text-[#fff]">
                Services offering
              </span>
              <div className="mt-[40px] flex justify-between">
                <div className="items-center">
                  <div className="w-[30px] h-[30px] md:w-[53px] md:h-[52px] relative m-auto">
                    <Image
                      src="/assests/pen.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Picture of the author"
                      className="m-auto"
                    />
                  </div>
                  <p className="mt-[16px] text-[10px] md:text-[16px] font-[300] text-[#fff] opacity-[80%] text-center">
                    UI/UX Design
                  </p>
                </div>
                <div className="items-center">
                  <img src="/mobile_development.png" alt="" />
                  <div className="w-[30px] h-[30px] md:w-[53px] md:h-[52px] relative m-auto">
                    <Image
                      src="/assests/mobile_development.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Picture of the author"
                      className="m-auto"
                    />
                  </div>

                  <p className="mt-[16px] text-[10px] md:text-[16px] font-[300] text-[#fff] opacity-[80%] text-center">
                    Mobile Development
                  </p>
                </div>
                <div className="items-center">
                  <div className="w-[30px] h-[30px] md:w-[53px] md:h-[52px] relative m-auto">
                    <Image
                      src="/assests/webdev.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Picture of the author"
                      className="m-auto"
                    />
                  </div>

                  <p className="mt-[16px] text-[10px] md:text-[16px] font-[300] text-[#fff] opacity-[80%] text-center">
                    Web Development
                  </p>
                </div>
                <div className="items-center">
                  <div className="w-[30px] h-[30px] md:w-[53px] md:h-[52px] relative m-auto">
                    <Image
                      src="/assests/mobile_development.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="Picture of the author"
                      className="m-auto"
                    />
                  </div>

                  <p className="mt-[16px] text-[10px] md:text-[16px] font-[300] text-[#fff] opacity-[80%] text-center">
                    Digital Marketing
                  </p>
                </div>
              </div>
              <div className="mt-[44px] flex items-center justify-around align-middle">
                <h2 className="text-[40px] font-[600] text-[#fff]">
                  Things I&apos;m good at
                </h2>
                <img src="https://i.ibb.co/K7kr1tq/thumbup.png" alt="" />
              </div>
              <div className="mt-[38px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>All Services</span>
                </div>
                <a className="h-[44px] w-[80px]" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-2">
          <div className="lg:col-span-1 col-span-2">
            <div className="rounded-lg border-2 border-solid bg-[#151517] pb-[20px] pt-[20px] border-[#2b2b2b]">
              <span className="pl-[32px] pr-[24px] text-[24px] font-[500] text-[#fff]">
                Skills &amp; Tools
              </span>
              <div className="relative flex overflow-x-hidden">
                <div className="animate-infinite-slider flex w-[calc(250px*10)] py-4">
                  {skills.map((logo, index) => (
                    <div
                      className="slide flex w-[125px] items-center justify-center border border-[#2b2b2b] mr-5 p-4 rounded-lg"
                      key={index}
                    >
                      {logo}
                    </div>
                  ))}
                  {skills.map((logo, index) => (
                    <div
                      className="slide flex w-[125px] items-center justify-center border border-[#2b2b2b] mr-5 p-4 rounded-lg"
                      key={index}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex overflow-x-hidden">
                <div className="animate-infinite-slider flex w-[calc(250px*10)] py-4">
                  {skill_logos.map((logo, index) => (
                    <div
                      className="slide flex w-[125px] items-center justify-center border border-[#2b2b2b] mr-5 p-4 rounded-lg"
                      key={index}
                    >
                      {logo}
                    </div>
                  ))}
                  {skill_logos.map((logo, index) => (
                    <div
                      className="slide flex w-[125px] items-center justify-center border border-[#2b2b2b] mr-5 p-4 rounded-lg"
                      key={index}
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2">
            <div className="rounded-lg bg-[#151517] px-[20px] py-[29px] lg:py-[47px] border-2 border-[#2b2b2b]">
              <div>
                <p className="text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                  Work With
                </p>
                <p className="ml-[38px] text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                  Aadarsha Karki........!
                </p>
              </div>
              <div className="mt-[38px] flex items-center justify-between">
                <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                  <span>Get in touch</span>
                </div>
                <a className="h-[44px] w-[80px]" href="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={40}
                    viewBox="0 0 78 40"
                    fill="none"
                  >
                    <path
                      d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                      fill="white"
                    />
                    <path
                      d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-2 lg:col-span-2">
        <div className="col-span-2">
          <div className="flex flex-col rounded-2xl bg-[#151517] px-[40px] py-[68px] border-2 border-[#2b2b2b]">
            <div className="mb-[40px] flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">01</p>
              <p className="text-[16px] text-[#fff]">Year Experience</p>
            </div>
            <div className="mb-[40px] flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">+10</p>
              <p className="text-[16px] text-[#fff]">Total Project</p>
            </div>
            <div className="flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">+10</p>
              <p className="text-[16px] text-[#fff]">Worldwide Clients</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="rounded-lg bg-[#151517] px-[20px] py-[20px] lg:py-[49px] border-2 border-[#2b2b2b]">
            <div>
              <p className="text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                See My
              </p>
              <p className="ml-[38px] text-[20px] font-[600] text-[#fff] lg:text-[24px]">
                Latest Works
              </p>
            </div>
            <div className="m-[30px] flex items-center justify-center">
              <img
                src="https://i.ibb.co/KWc066x/all-project-image-DVTy4ma-R.png"
                alt=""
              />
            </div>
            <div className="mt-[38px] flex items-center justify-between">
              <div className="text-base font-[500] leading-[150%] text-[#ffff]">
                <span>Get in touch</span>
              </div>
              <a className="h-[44px] w-[80px]" href="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={70}
                  height={40}
                  viewBox="0 0 78 40"
                  fill="none"
                >
                  <path
                    d="M39.7674 28.2202C41.6527 32.4019 44.9182 35.8085 49.0165 37.8689C53.1148 39.9293 57.7968 40.5183 62.2777 39.5372C66.7587 38.5561 70.7661 36.0645 73.6285 32.48C76.4908 28.8955 78.034 24.4361 77.9994 19.8492C77.9648 15.2622 76.3545 10.8266 73.4385 7.28568C70.5224 3.74481 66.4778 1.31394 61.9825 0.400527C57.4873 -0.512885 52.8147 0.146678 48.748 2.26866C44.6812 4.39065 41.4675 7.84608 39.6455 12.0558L40.7467 12.5324C42.4595 8.57532 45.4804 5.32721 49.3031 3.33255C53.1259 1.33788 57.5181 0.717889 61.7436 1.5765C65.9691 2.4351 69.771 4.72012 72.5122 8.04854C75.2533 11.377 76.7669 15.5465 76.7995 19.8582C76.832 24.1699 75.3814 28.3618 72.6908 31.7312C70.0002 35.1006 66.2331 37.4427 62.0211 38.3649C57.809 39.2872 53.4079 38.7335 49.5555 36.7967C45.7031 34.86 42.6335 31.6578 40.8613 27.727L39.7674 28.2202Z"
                    fill="white"
                  />
                  <path
                    d="M60.5303 20.5303C60.8232 20.2374 60.8232 19.7626 60.5303 19.4697L55.7574 14.6967C55.4645 14.4038 54.9896 14.4038 54.6967 14.6967C54.4038 14.9896 54.4038 15.4645 54.6967 15.7574L58.9393 20L54.6967 24.2426C54.4038 24.5355 54.4038 25.0104 54.6967 25.3033C54.9896 25.5962 55.4645 25.5962 55.7574 25.3033L60.5303 20.5303ZM6.55671e-08 20.75L60 20.75L60 19.25L-6.55671e-08 19.25L6.55671e-08 20.75Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
