import React from "react";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIconBar = () => {
  return (
    <div className="z-50 hidden social-icon sm:block">
      <div className="bg-[#D5AD45] py-16 px-3.5 rounded-ss-xl rounded-es-xl ">
        <ui class="space-y-10 text-left text-gray-500 dark:text-gray-400 list-none">
          <li class="flex items-center space-y-3 rtl:space-x-reverse ">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
          </li>
          <li class="flex items-center space-y-3 rtl:space-x-reverse">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaXTwitter className="w-5 h-5 text-white" />
            </a>
          </li>
          <li class="flex items-center space-y-3 rtl:space-x-reverse">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaTiktok className="w-5 h-5 text-white" />
            </a>
          </li>
          <li class="flex items-center space-y-3 rtl:space-x-reverse">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
          </li>
          <li class="flex items-center space-y-3 rtl:space-x-reverse">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
          </li>
          <li class="flex items-center space-y-3 rtl:space-x-reverse">
            <a href="#" className="hover:underline hover:animate-bounce">
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
          </li>
        </ui>
      </div>
    </div>
  );
};

export default SocialIconBar;
