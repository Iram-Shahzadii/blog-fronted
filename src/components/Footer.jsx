import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col py-12 md:flex-row items-start justify-between gap-8">
        {/* About Section */}
        <div className="w-full sm:w-1/3 flex flex-col gap-3 px-2">
          <h1 className="text-xl font-bold text-gray-700">About</h1>
          <p className="text-gray-600 text-sm leading-6">
            Iram Blog is a platform built with the MERN stack to share knowledge,
            tutorials, and insights about coding, technology, and problem-solving.
            The goal is to inspire learners and contribute to the developer community.
          </p>
          <a
            href="mailto:IramCodes@gmail.com"
            className="text-lg text-gray-700 hover:underline"
          >
            Email: IramCodes@gmail.com
          </a>
          <a
            href="tel:012345678900"
            className="text-lg text-gray-700 hover:underline"
          >
            Phone: 012345678900
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                className="cursor-pointer hover:font-semibold text-gray-700"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:font-semibold text-gray-700"
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:font-semibold text-gray-700"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer hover:font-semibold text-gray-700"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Categories</h1>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:font-semibold text-gray-700">
              Weather
            </li>
            <li className="cursor-pointer hover:font-semibold text-gray-700">
              Lifestyle
            </li>
            <li className="cursor-pointer hover:font-semibold text-gray-700">
              Technology
            </li>
            <li className="cursor-pointer hover:font-semibold text-gray-700">
              News
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="h-0.5 bg-gray-300 w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-6 text-gray-600 text-sm gap-4">
        {/* Logo */}
        <div className="flex gap-2 items-center justify-center">
          <img src={assets.logo} alt="logo" className="w-10 h-10" />
          <p>
            Iram <span className="font-bold text-xl">Blog</span>
          </p>
        </div>

        {/* Links */}
        <ul className="flex gap-4 flex-col sm:flex-row items-center">
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          <li>© 2025 Iram Blog. All rights reserved.</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;