"use client";

import React, { useEffect, useState } from "react";
//import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DashboardItem from "../../data/header.json";

//import menuImg from "../../public/images/menu-img/menu-img-2.png";
import { useAppContext } from "@/context/Context";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Nav = () => {
  const pathname = usePathname();
  //const { showItem, setShowItem } = useAppContext();
  const [showPage, setShowPage] = useState(true);

  const isActive = (href) => pathname.startsWith(href);

  const { data: session } = useSession();
 // console.log("Session data:", session);

  return (
    <>
      <ul className="mainmenu">
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="#"
            onClick={() => setShowItem(!showItem)}
            className={`${!showItem ? "open" : ""}`}
          >
            Dashboard
          </a>
          <div
            className={`rainbow-megamenu right-align with-mega-item-2 ${
              showItem ? "" : "d-block"
            }`}
          >
            <div className="wrapper p-0">
              <div className="row row--0">
                <div className="col-lg-6 single-mega-item">
                  <h3 className="rbt-short-title">DASHBOARD PAGES</h3>
                  <ul className="mega-menu-item">
                    {DashboardItem &&
                      DashboardItem.navDashboardItem.map((data, index) => (
                        <li key={index}>
                          <Link
                            href={data.link}
                            className={isActive(data.link) ? "active" : ""}
                          >
                            {data.text}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6 single-mega-item">
                  <div className="header-menu-img">
                    <Image src={menuImg} alt="Menu Split Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li> */}
        {/* <li className="with-megamenu has-menu-child-item position-relative">
          <a
            href="#"
            onClick={() => setShowPage(!showPage)}
            className={`${!showPage ? "open" : ""}`}
          >
            Pages
          </a>
          <div
            className={`rainbow-megamenu right-align with-mega-item-2 small ${
              showPage ? "" : "d-block"
            }`}
          >
            <div className="wrapper p-0">
              <div className="row row--0">
                <div className="col-lg-12 single-mega-item">
                  <h3 className="rbt-short-title">Inner Pages</h3>
                  <ul className="mega-menu-item">
                    {DashboardItem &&
                      DashboardItem.navPageItem.map((data, index) => (
                        <li key={index}>
                          <Link
                            href={data.link}
                            className={isActive(data.link) ? "active" : ""}
                          >
                            {data.text}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li> */}
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
        <li>
          <Link href="https://oneclickhuman.com/blog">Blog</Link>
        </li>
        <li>
          <Link href="/help">API</Link>
        </li>
        { session ?
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
            >Sign out</a>
          </li>
          :
          <li>
            <Link href="/signin">Sign In</Link>
           </li>
        }
      </ul>
    </>
  );
};

export default Nav;
