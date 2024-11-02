"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Modal from "@/components/Common/Modal";
import TextGenerator from "@/components/TextGenerator/TextGenerator";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const TextGeneratorPage = () => {

  const router = useRouter(); 
  const { data: session } = useSession();
  if (!session) {
    router.push("/signin");
  }

  const user_data = useSelector(state => state);
  console.log(user_data);
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="" />
            <PopupMobileMenu />
            <LeftpanelDashboard />
            <Modal />

            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    <TextGenerator userData={user_data}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </main>
    </>
  );
};

export default TextGeneratorPage;
