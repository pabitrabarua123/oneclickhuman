"use client";

import React from "react";
import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "../backToTop";
import Help from "@/components/Help/Help";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const HelpPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Help" text="Help" />

          <Help />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HelpPage;
