import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import MotionEffect from "./motion/MotionEffect";
import { SITECONFIG } from "@/config/site";

const Footer = () => {
  console.log("====================================");
  console.log("check data vlaue 19", SITECONFIG?.footer?.footer_logo);
  console.log("====================================");

  return (
    <footer className="bg-[#1B2639] py-5 px-5 lg-px-0">
      <div className="mx-auto w-full max-w-screen-2xl py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 justify-center">
            <div className="mb-6 md:mb-0 col-span-2">
              <a
                href="https://trip-law.com"
                className="flex items-center cursor-pointer"
              >
                <Image
                  width={320}
                  height={200}
                  src={SITECONFIG?.footer?.footer_logo}
                  alt="Trip Low"
                  className="object-cover"
                />
              </a>
              <p className="text-gray-300 font-thin text-base py-5 max-w-96">
                {SITECONFIG?.footer?.description}
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-white">Company</h2>
              <ul className="text-gray-300 font-thin text-base">
                {SITECONFIG?.footer?.company?.map((el, index) => (
                  <li className="mb-4" key={index}>
                    <a href="#" className="hover:underline">
                      {el.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-white">
                Quick Links
              </h2>
              <ul className="text-gray-300 font-thin text-base">
                {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                  <li className="mb-4" key={index}>
                    <a href="#" className="hover:underline">
                      {el.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <h2 className="mb-6 text-lg font-semibold text-white">Contact</h2>
              <ul className="text-gray-300 font-thin text-base">
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <p>1543 Lakeland Hills Blvd, Ste. 17, Lakeland, FL 33805</p>
                </li>
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                      />
                    </svg>
                  </div>

                  <p>info@trip-law.com</p>
                </li>
                <li className="mb-4 flex items-center gap-3">
                  <div className="w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>

                  <p>(863)-599-6735</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex mt-10 sm:justify-center sm:mt-4 gap-3">
                    <Link
                      href="#"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 17"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>
                    <Link
                      href="#"
                      className="text-[#1B2639] hover:animate-pulse bg-slate-200 rounded-full p-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex :items-center sm:justify-between">
          <div className="text-gray-300 font-thin text-base text-center">
            © 2024{" "}
            <a href="https://trip-law.com/" className="hover:underline">
              Trip Law™
            </a>
            . All Rights Reserved.
          </div>
          <div className="text-gray-300 font-thin text-base text-center">
            Design & Developed by{" "}
            <a
              href="https://www.bayshorecommunication.com//"
              target="_blank"
              className="hover:underline"
            >
              BayShore Communication
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
