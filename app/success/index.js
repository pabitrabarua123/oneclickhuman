"use client";

import Context from "@/context/Context";

import Header from "@/components/Header/Header";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Success from "../../public/images/success/success.png";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

const SuccessPage = () => {

  const searchParams = useSearchParams();
  const [sub_credits, setSubCredits] = useState(0);
  const [sub_amnt, setSubAmount] = useState(0);
  const [success_currency, setSuccessCurrency] = useState('');
  const [IsSubscriptionPlan, setIsSubscriptionPlan] = useState(false);
  
  useEffect(() => {
    const updatePayment = async () => {
      const session = await getSession(); 
      let param = searchParams.get('success');
      let subcrdt = searchParams.get('plan');
      let subamnt = searchParams.get('amnt');
      let subscriptionPlan = searchParams.get('subscription');
      let currency = searchParams.get('currency');
  
      if(param === 'true'){
        setSubCredits(subcrdt);
        setSubAmount(subamnt);
        setSuccessCurrency(currency);
        if(subscriptionPlan === 'true'){
           setIsSubscriptionPlan(true);
        }else{
          setIsSubscriptionPlan(false);
       }
  
      // fetch('https://oneclickhuman.com/api_request/update_payment_react', {
      //   mode:'cors', 
      //   method: 'POST',
      //   body: JSON.stringify({
      //     'email' : session.user.user_email,
      //     'plan' : subcrdt,
      //     'subscription' : subscriptionPlan,
      //     'currency' : currency,
      //     'amnt' : subamnt,
      //   }),
      //   headers: {
      //      'Content-type': 'application/json; charset=UTF-8',
      //   }
      // }).then(res => res.json())
      //   .then((json) => {
      //      console(json.status);
      // });
     }
    }
    updatePayment();
  }, [1]);

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

          <div className="rbt-style-guide-area rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div
                id="colorPalette"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
               <div className="row">
                 <div className="col-md-6">
                  <div className="success-left">
                    <h3>Payment Successful</h3>
                    <p>Congratulations, we have received your payment, please find the details of your purchase below.</p>
                    <div id="succ-table">
                      <div id="table-head">
                        <p><b>Details</b></p>
                        <p><b>Words</b></p>
                        <p><b>Amount</b></p>
                      </div>
                      <div id="table-content">
                       <p>{IsSubscriptionPlan === true ? 'Monthly Membership' : 'Onetime plan'}</p>
                       <p>{sub_credits*1000} {IsSubscriptionPlan === true ? '/Month' : ''}</p>
                       <p>{success_currency}{sub_amnt}</p>
                      </div>
                      <a className="btn-default" href="/humanizer">Go to tool</a>
                    </div>
                  </div>
                 </div>
                 <div className="col-md-6">
                  <div className="success-right">
                    <Image src={Success} alt="success"/>
                  </div>
                 </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* <Footer /> */}
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default SuccessPage;
