import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 grid grid-cols-6 gap-2">
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[32px] lg:col-span-2">
            <img
              src="/assests/profile.png"
              alt=""
              className="m-auto h-[200px] w-[200px] rounded-full bg-[#9747ff]"
            />
          </div>
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[24px] text-center lg:col-span-4 lg:text-start">
            <span className="text-[20px] font-[600] text-[#fff] lg:text-[28px] xl:text-[32px]">
              Hello,
            </span>
            <h2 className="text-[20px] font-[600] text-[#fff] lg:text-[28px] xl:text-[32px]">
              I'm Aadarsha an Adept
            </h2>
            <span className="text-[20px] font-[600] text-[#fff] lg:text-[28px] xl:text-[32px]">
              FullStack Web Developer
            </span>
            <p className="text-[16px] text-[#fff] xl:text-[18px]">
              As a skilled Full Stack Web Developer, my diverse background has
              allowed me to apply my expertise across different fields and
              industries, demonstrating adaptability and versatility.
            </p>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-6 gap-2">
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[24px] lg:col-span-2">
            <p className="text-[18px] font-[500] text-[#fff] md:text-[20px] xl:text-[24px]">
              What I do
            </p>
            <div className="mt-[40px] flex flex-col">
              <div className="flex">
                <span className="mr-[8px] text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Web Design
                </p>
              </div>
              <div className="flex">
                <span className="mr-[8px] text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Web Development
                </p>
              </div>
              <div className="flex">
                <span className="mr-[8px] text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  App Development
                </p>
              </div>
              <div className="flex">
                <span className="mr-[8px] text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Web Deployment
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[24px] text-center lg:col-span-4 lg:text-start">
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-[500] text-[#fff] md:text-[20px] xl:text-[24px]">
                My Experience
              </p>
            </div>
            <div className="flex flex-col justify-between mt-[40px] md:w-[90%]">
              <div className="flex justify-between items-center my-3">
                <span className="text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  06/23-02/24
                </p>
                <span className="w-[16px] h-[1px] bg-[#fff]"></span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Backend Developer
                </p>
                <span className="w-[16px] h-[1px] bg-[#fff]"></span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Ajna Lab
                </p>
              </div>
              <div className="flex justify-between items-center my-3">
                <span className="text-[16px] font-[300] text-[#fff]">
                  &gt;&gt;
                </span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  02/24-Present
                </p>
                <span className="w-[16px] h-[1px] bg-[#fff]"></span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  FullStack Developer
                </p>
                <span className="w-[16px] h-[1px] bg-[#fff]"></span>
                <p className="text-[16px] font-[300] text-[#fff] opacity-70">
                  Namlo Tech
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-6 gap-2">
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[24px] lg:col-span-2">
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
          <div className="col-span-6 rounded-lg border-2 border-[#2b2b2b] bg-[#151517] p-[24px] text-center lg:col-span-4 lg:text-start">
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-[500] text-[#fff] md:text-[20px] xl:text-[24px]">
                My Education
              </p>
            </div>
            <div className="flex items-start mt-[40px] flex-col md:flex-row md:justify-between">
              <div className="m-2">
                <p className="text-[16px] font-[300] text-[#fff] text-start">
                  2016-2018
                </p>
                <p className="text-[18px] font-[500] text-[#fff] text-start">
                  HighSchool
                </p>
                <p className="text-[16px] font-[300] text-[#fff] text-start">
                  Koshi Saints James
                </p>
              </div>
              <div className="m-2">
                <p className="text-[16px] font-[300] text-[#fff] text-start">
                  2018-2022
                </p>
                <p className="text-[18px] font-[500] text-[#fff] text-start">
                  Bachelor in CSIT
                </p>
                <p className="text-[16px] font-[300] text-[#fff] text-start">
                  Tribhuvan university
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col md:flex-row md:justify-between rounded-2xl bg-[#151517] p-[24px] border-2 border-[#2b2b2b]">
            <div className="mb-[40px] md:mb-0 flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">01</p>
              <p className="text-[16px] text-[#fff]">Year Experience</p>
            </div>
            <div className="mb-[40px] md:mb-0 flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">+10</p>
              <p className="text-[16px] text-[#fff]">Total Project</p>
            </div>
            <div className="flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">+10</p>
              <p className="text-[16px] text-[#fff]">Worldwide Clients</p>
            </div>
            <div className="flex flex-col justify-between text-center">
              <p className="text-[54px] font-[600] text-[#fff]">00</p>
              <p className="text-[16px] text-[#fff]">Unhappy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
