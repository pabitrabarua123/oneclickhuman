"use client";

import React, { useEffect } from "react";
import { Tool } from "./Tool";

import sal from "sal.js";

const TextGenerator = ({userData}) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

       // bgflashlight.style.setProperty("--x", x + "px");
       // bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  return (
    <>
          <div
            className="chat-box-list pt--30"
            id="chatContainer"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="chat-box author-speech bg-flashlight">
              <div className="inner">
                <Tool userData={userData}/>
              </div>
            </div>
          </div>

    </>
  );
};

export default TextGenerator;
