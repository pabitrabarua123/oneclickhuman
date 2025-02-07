"use client";

import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import SignUp from "@/components/sign/SignUp";

const SignUpPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <SignUp />

          {/* <Footer /> */}
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default SignUpPage;
