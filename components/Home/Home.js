"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import separator from "../../public/images/separator/separator-top.svg";
import separatorLight from "../../public/images/light/separator/separator-top.svg";
import { useAppContext } from "@/context/Context";

const Home = () => {
  const { isLightTheme } = useAppContext();
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title display-one">
                  Transform <br />
                  <span className="theme-gradient">AI-Generated Content into</span>
                  <br />
                  <span className="color-off">Authentic Human Writing</span>
                </h1>
                <p className="b1 desc-text">
                It does not just beat AI detectors, it improves your content quality
                </p>
                <div className="button-group">
                  <Link
                    className="btn-default bg-light-gradient btn-large"
                    href="/humanizer"
                  >
                    <div className="has-bg-light"></div>
                    <span>Start Humanizing for Free</span>
                  </Link>
                </div>
                <p className="color-gray mt--5">💳 No credit card required!</p>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        <div className="chatenai-separator has-position-bottom">
          <Image
            className={`w-100 ${
              isLightTheme ? "separator-dark" : "separator-light"
            }`}
            src={isLightTheme ? separator : separatorLight}
            alt="separator"
          />
        </div>
        <br/>
      </div>
    </>
  );
};

export default Home;
