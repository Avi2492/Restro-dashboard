import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="relative overflow-hidden py-10">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <Logo />
                </div>
                <div>
                  <p className="mb-4  text-base font-medium">
                    The Tailwind CSS Component library
                  </p>
                  <p className="text-sm text-gray-300">
                    &copy; Copyright 2022. All Rights Reserved by DevUI.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-white"
                      href="#"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
