"use client";

import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Split from "@/components/Split/Split";
import Pricing from "@/components/Pricing/Pricing";
import Accordion from "@/components/Accordion/Accordion";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";

const HomePage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <Home />
          <Service />
          <Separator top={true} />
          <Split />
          <Separator top={true} />
          <Pricing />
          <Separator top={true} />
          <Accordion isHead={true} />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
