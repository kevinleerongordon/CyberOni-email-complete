import { MyContext } from "@/context/brains";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useContext, useState } from "react";

interface Props {
    transparent?:boolean
}
const useBrains = () => {
  const brains = useContext(MyContext);
  console.log("BrainsContext", brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;

  return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner };
};
function Navbar(props: Props): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
    const { scrollYProgress } = useScroll();
const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
  useBrains();
    return (
      <nav
        className={
          (props.transparent
            ? "absolute top-0 z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between rounded-b bg-gradient-to-r  bg-gradient-to-r from-cyan-500 from-indigo-500 to-blue-500 to-transparent px-2 py-3"
        }
      >
        <div className="container flex flex-wrap justify-between items-center px-4 mx-auto">
          <div className="flex relative justify-between w-full lg:static lg:block lg:w-auto lg:justify-start">
            <Link href="/" className="flex items-center text-2xl font-display">
              <motion.div>
                <Image
                  src={brainsSiteOwner.images.logo?.links.url || "/logo"}
                  alt="CyberOni logo"
                  width="30"
                  height="30"
                  className="mr-2 rounded-sm animate-bounce"
                ></Image>
              </motion.div>
              <p className="subpixel-antialiased text-white">
                {brainsSiteOwner.business_information?.business_alias}
              </p>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="www.cybershoptech.com/#about-us"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " far fa-file-alt leading-lg mr-2 text-lg"
                    }
                  />{" "}
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="/contact-us"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " far fa-file-alt leading-lg mr-2 text-lg"
                    }
                  />{" "}
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="/services"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " far fa-file-alt leading-lg mr-2 text-lg"
                    }
                  />{" "}
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="/blogs"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " far fa-file-alt leading-lg mr-2 text-lg"
                    }
                  />{" "}
                  Blogs
                </Link>
              </li>
              
            </ul>
            <ul className="flex flex-col list-none lg:ml-auto lg:flex-row">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " fab fa-facebook leading-lg text-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " fab fa-twitter leading-lg text-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? "text-gray-500 lg:text-gray-300"
                        : "text-gray-500") +
                      " fab fa-github leading-lg text-lg "
                    }
                  />
                  <span className="inline-block ml-2 lg:hidden">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className={
                    (props.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-pink-600") +
                    " ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none ring ring-blue-300 hover:shadow-md hover:ring-purple-500 focus:outline-none lg:mr-1 lg:mb-0"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <a href="https://calendly.com/oni_development/15min" target="_blank" rel="noreferrer">
  <i className="fas fa-arrow-alt-circle-down"></i> Free Quote
</a>

                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar
