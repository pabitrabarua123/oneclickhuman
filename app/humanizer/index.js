"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboard from "@/components/Common/LeftpanelDashboard";
import Modal from "@/components/Common/Modal";
import TextGenerator from "@/components/TextGenerator/TextGenerator";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const TextGeneratorPage = () => {

  setTimeout(async () => {
    const session = await getSession(); 
    if (!session) {
      router.push("/signin");
    }
  }, 2000)

  const user_data = useSelector(state => state);
  //console.log(user_data);

  const dispatch = useDispatch();
  const router = useRouter(); 

  const fetchUserDetails = async () => {
    console.log('request sending....');
    dispatch({type: 'loading-user'}); 
    const session_details = await getSession();   
    try {
         let res = await fetch('https://oneclickhuman.com/api_request/checkquota_test', {
          mode:'cors', 
          method: 'POST',
          body: JSON.stringify({
            'user_id' : session_details.user.user_id,
          }),
           headers: {
             'Content-type': 'application/json; charset=UTF-8',
           }
         });
  
         let data = await res.json();
  
         console.log(data);
         data.user_id = session_details.user.user_id;
         data.user_email = session_details.user.user_email;
         data.time = session_details.user.time;
  
         dispatch({type: 'loading-success', payload: data});
    } catch (error) {
         dispatch({type: 'request-failure'});
    }
  }

  useEffect(() => {
    if(!user_data.user_id){
         fetchUserDetails();
    }
  }, [1]);
  
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
                    { !user_data.loading &&
                      <TextGenerator userData={user_data}/>
                    }
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
