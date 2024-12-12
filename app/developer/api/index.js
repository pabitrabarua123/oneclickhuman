"use client";

import Context from "@/context/Context";
import StyleGuide from "@/components/StyleGuide/StyleGuide";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Common/Breadcrumb";
const StyleGuidepage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Developer API" text="Developer API" />

          <StyleGuide />

          {/* <Footer /> */}
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default StyleGuidepage;
