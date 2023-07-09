import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white px-[4rem] py-[2rem]">
        <div className=" flex justify-between">
          <div className="flex gap-[3rem]">
            <span>
              <a href="/"> About</a>
            </span>
            <span>
              <a href="/">FAQs</a>
            </span>
            <span>
              <a href="/">Disclaimer</a>
            </span>
            <span>
              <a href="/">Terms of Use</a>
            </span>
            <span>
              <a href="/">Privacy</a>
            </span>
          </div>
          <ul className="flex gap-[2rem] text-[1.2rem]">
            <li>
              <a href="/">
                <i class="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-[4rem] flex">
          <div className="w-[20%]">
            <p className="font-[600] text-[1.2rem]">Our Business</p>
            <ul className="pt-[2rem] flex flex-col gap-1">
              <li>
                <a href="/">Oil Trading</a>
              </li>
              <li>
                <a href="/">Shipping</a>
              </li>
              <li>
                <a href="/">Procurement</a>
              </li>
              <li>
                <a href="/">Soft Commodities</a>
              </li>
            </ul>
          </div>
          <div className="w-[35%] pl-[3rem]">
            <p className="font-[600] text-[1.2rem]">Head Office</p>
            <div className="pt-[2rem] ">
              <span> Triber Group </span>
              <br />
              <span className="pl-[.7rem]">44, Raymond Njoku Street</span>{" "}
              <br />
              <span className="pl-[.7rem]">Ikoyi, Lagos, Nigeria.</span> <br />
              <span className="pl-[.7rem]">P.O.Box 55471, Ikoyi Lagos</span>
            </div>
          </div>
          <div className="w-[35%]">
            <p className="font-[600] text-[1.2rem]">Contact</p>
            <div className="pt-[2rem] flex flex-col">
              <span>
                <a href="tel:+2348087145807">Tel: +2348087145807</a>
              </span>
              <span className="pt-[1.5rem]">
                {" "}
                <a href="mailto:info@Triber-group.com">
                  Email: info@Triber-group.com
                </a>
              </span>
              <p className="pl-[3.1rem]">
                <a href="mailto:career@triber-group.com">
                  career@triber-group.com
                </a>
              </p>
            </div>
          </div>
          <div className="font-[600] text-[1.2rem] flex flex-col gap-2">
            <span>Reliable</span>
            <span>energy,</span>
            <span>limitless</span>
            <span>potential</span>
          </div>
        </div>
        <div className="pt-[8rem] flex justify-between">
          <p>&copy; 2022 Triber Group. All rights reserved.</p>
          <ul className="flex gap-[2rem] text-[1.2rem]">
            <li>
              <a href="/">
                <i class="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="bx bxl-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
