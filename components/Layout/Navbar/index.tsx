import { FC, useEffect, useState } from "react";
import { Link } from "@components/Utils/Link";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { CustomImage } from "@components/Utils/CustomImage";
import classNames from "classnames";
import icon from "@assets/icon.svg";
import { Button } from "@components/Utils/Button";

export const Navbar: FC = () => {
  const router = useRouter();
  const [top, setTop] = useState(false);
  const [hash, setHash] = useState(false);

  const PAGES = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Company",
      link: "/#about",
    },
    {
      name: "Products",
      link: "/#services",
    },
    {
      name: "Services",
      link: "/#projects",
    },
    {
      name: "Solution",
      link: "/#contact",
    },
    {
      name: "Download",
      link: "/#contact",
    },
    {
      name: "Contact Us",
      link: "/#contact",
    },
  ];

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true);
      else setTop(false);
    };
  }, []);

  const onUp = () => {
    window.location.href = "#";
  };

  const onClose = () => {
    setHash(!hash);
  };

  return (
    <header id="site-header" className="header header-2">
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 justify-content-between">
              <a href="#" className="navbar-brand logo d-block h-100 d-flex justify-content-center">
                <CustomImage
                  style={{ height: 116, width: 116 }}
                  src={'https://www.tallysolution.net/assets/images/logo.gif'}
                  className="mr-3 h-6 sm:h-9 rounded-md"
                  alt="Navbar Logo"
                />
              </a>
            </div>
            <div className="col-md-10">
              <div className="row  mobo-menu-item">
                <div className="col-md-7">
                  <div className="align-items-center text-center">
                    <span className="om-sai-ram">ॐ साईं राम</span>
                  </div>
                  <div className="row justify-content-center align-items-end">
                    <div className="col-md-8">
                     {/*  <div className="owl-carousel owl-theme">
                        <div> Your Content </div>
                        <div> Your Content </div>
                        <div> Your Content </div>
                        <div> Your Content </div>
                        <div> Your Content </div>
                        <div> Your Content </div>
                        <div> Your Content </div>
                      </div> */
                      }






                    </div>
                    <div className="col-md-4">
                      <a href="#" target="_blank">
                        <img src="https://www.tallysolution.net/assets/images/tallyinternational.png" className="tally-international-shake" />

                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-12"></div>
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div className="d-flex align-items-end me-3">
                          <i className="flaticon-email pe-2" style={{ fontSize: 25 }}></i>
                          <div>
                            <h6>Email Us</h6>
                            <a href="mailto:tallyproducts@gmail.com">tallyproducts@gmail.com</a>
                          </div>
                        </div>
                        <div className="d-none d-md-flex align-items-end me-3">
                          <i className="flaticon-phone pe-2" style={{ fontSize: 25 }}></i>
                          <div>
                            <h6>Call Us</h6>
                            <a href="tel:+919582927928">+91 9582927928</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="topbar-link d-none d-sm-flex align-items-center justify-content-between" />
              <div className="header-wrap">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12">
                      <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav w-100 justify-content-center">
                            {PAGES.map((nav, index) => (
                              <li key={index} className="nav-item">
                                <Link
                                  href={nav.link}
                                  className="nav-link"
                                >
                                  {nav.name}
                                </Link>
                              </li>
                            ))}
                            <li className="nav-item-button">
                              <div className="d-flex" />
                              <div>
                                <a className="btn me-1 me-sm-3"><span>Rapid
                                  Response Center</span></a>
                                <a className="btn me-1 me-sm-3" href="buyoffline.php"><i className="flaticon-shopping-cart"></i><span>Buy Tally</span></a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none ring-2 ring-gray-200 duration-100"
              onClick={onClose}
            >
              <GiHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          <div
            className={classNames(
              "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
              { hidden: !hash }
            )}
          >
            
          </div> */}
      </div>
      <button
        aria-label="Go Up"
        onClick={onUp}
        className={classNames(
          "bg-white border-2 border-blue-700 text-center fixed bottom-5 h-12 w-12 right-5 duration-500 rounded-full z-50 group",
          "hover:bg-blue-600 hover:border-blue-600",
          {
            block: top,
            hidden: !top,
          }
        )}
      >
        <IoIosArrowUp className="h-full w-full p-2 text-blue-700 group-hover:text-white" />
      </button>
    </header>
  );
};
