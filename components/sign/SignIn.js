"use client"

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import sal from "sal.js";

import boxedLogo from "../../public/images/logo/boxed-logo.png";

const SignIn = () => {
  const { isLightTheme } = useAppContext();
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  //const { data: session } = useSession();
  const dispatch = useDispatch(); 

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Signing in...');
  setSubmitting(true);

  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (res?.error) {
    setError(res.error);
    setSubmitting(false);
  } else {
    // Explicitly call getSession to update session data after login
    const session = await getSession();
    if (session) {
      console.log("Session data:", session);
      router.push("/humanizer");
    } else {
      console.log("No session available");
    }
  }
};

  return (
    <>
      <div
        className="signup-area rainbow-section-gapTop-big"
        data-black-overlay="2"
      >
        <div className="sign-up-wrapper rainbow-section-gap">
          <div className="sign-up-box bg-flashlight">
            <div className="signup-box-top top-flashlight light-xl">
              <Image
                className={`${
                  isLightTheme ? "boxed-logo-dark" : "boxed-logo-light"
                }`}
                src={isLightTheme ? boxedLogo : boxedLogo}
                width={476}
                height={158}
                alt="sign-up logo"
              />
            </div>
            <div className="separator-animated animated-true"></div>
            <div className="signup-box-bottom">
              <div className="signup-box-content">
                <h4 className="title">Welcome Back!</h4>
                <div className="social-btn-grp">
                  {/* <Link className="btn-default btn-border" href="#">
                    <span className="icon-left">
                      <Image
                        src={google}
                        width={18}
                        height={18}
                        alt="Google Icon"
                      />
                    </span>
                    Login with Google
                  </Link>
                  <Link className="btn-default btn-border" href="#">
                    <span className="icon-left">
                      <Image
                        src={facebook}
                        width={18}
                        height={18}
                        alt="Google Icon"
                      />
                    </span>
                    Login with Facebook
                  </Link> */}
                </div>
                {/* <div className="text-social-area">
                  <hr />
                  <span>Or continue with</span>
                  <hr />
                </div> */}
                <form onSubmit={handleSubmit}>
                  <div className="input-section mail-section">
                    <div className="icon">
                      <i className="feather-mail"></i>
                    </div>
                    <input 
                       type="email" 
                       placeholder="Enter email address"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="input-section password-section">
                    <div className="icon">
                      <i className="feather-lock"></i>
                    </div>
                    <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"
                    />
                  </div>
                  <div className="forget-text">
                    <Link className="btn-read-more" href="/forgotPassword">
                      <span>Forgot password</span>
                    </Link>
                  </div>
                  <button type="submit" className="btn-default" disabled={submitting}>
                  {submitting ? "Signing in..." : "Sign In"}
                  </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div className="signup-box-footer">
                <div className="bottom-text">
                  Don&apos;t have an account?
                  <Link className="btn-read-more ps-2" href="/signup">
                    <span>Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
