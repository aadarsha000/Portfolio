"use client";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { Resend } from "resend";
import { MouseEvent, useState } from "react";
const ContactForm = () => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // resendEmail();
  };

  const resendEmail = async () => {
    try {
      await resend.emails.send({
        from: "uchihaobito9814@gmail.com",
        to: ["karkiaadarsha10@gmail.com"],
        subject: subject,
        html: message + "sender: " + name + "email: " + email,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  return (
    <div className="mt-[30px]">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <span className="text-[#9747ff] text-[18px] lg:text-[20px] font-[600]">
            Contact Info
          </span>
          <h3 className="text-[28px] lg:text-[32px] font-[600]">
            Get in touch
          </h3>
          <p className="text-[18px] lg:text-[20px] font-[600]">
            Don't be afraid to reach out. I'm always happy to hear from you.
          </p>
          <div className="flex flex-col mt-[40px] md:mt-[60px]">
            <div className="flex items-center my-[20px]">
              <div className="p-[24px] border rounded-full hover:border-[#9747ff] mr-[24px]">
                <HiOutlinePhone className="w-[32px] h-[32px] text-[#9747ff]" />
              </div>
              <div>
                <p className="text-[20px]">Phone</p>
                <a href="tel:+9779814340168">(+977)9814340168</a>
              </div>
            </div>
            <div className="flex items-center my-[20px]">
              <div className="p-[24px] border rounded-full hover:border-[#9747ff] mr-[24px]">
                <MdOutlineMailOutline className="w-[32px] h-[32px] text-[#9747ff]" />
              </div>
              <div>
                <p className="text-[20px]">Email</p>
                <a href="mailto:karkiaadarsha10@gmail">
                  karkiaadarsha10@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center my-[20px]">
              <div className="p-[24px] border rounded-full hover:border-[#9747ff] mr-[24px]">
                <FaMapMarkerAlt className="w-[32px] h-[32px] text-[#9747ff]" />
              </div>
              <div>
                <p className="text-[20px]">Address</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-2 bg-[#151517] rounded-lg p-[40px] lg:p-[60px]">
          <form action="">
            <div className="mb-[24px]">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-[16px] rounded-md border-2 bg-[#151517] border-[#2b2b2b] text-[#fff]"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-[24px]">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-[16px] rounded-md border-2 bg-[#151517] border-[#2b2b2b] text-[#fff]"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-[24px]">
              <label className="block mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full p-[16px] rounded-md border-2 bg-[#151517] border-[#2b2b2b] text-[#fff]"
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-[24px]">
              <label className="block mb-2" htmlFor="subject">
                Message
              </label>
              <textarea
                className="w-full p-[16px] rounded-md border-2 bg-[#151517] border-[#2b2b2b] text-[#fff]"
                name="message"
                id="message"
                cols={5}
                rows={5}
                placeholder="Your message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="p-[24px] bg-[#9747ff] rounded-full w-[150px] text-center">
              <Link
                onClick={handleClick}
                className="text-[18px] font-[500] text-[#fff] hover:text-[#9747ff] text-center"
                href=""
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
