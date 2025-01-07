import { useSession } from "next-auth/react";

export default function FreeItem({parentClass, incresePrice}) {

  const { data: session } = useSession();

    return(
      <div className={`${parentClass} ${!incresePrice ? "mt--30" : ""}`}>
       <div className="rainbow-pricing style-chatenai">
          <div className="pricing-table-inner bg-flashlight">
            
            <div className="pricing-top">
              <div className="pricing-header">
                <h4 className="title">Basic</h4>
                
                <div className="pricing">
                  <div className="price-wrapper">
                    <span className="price">Free</span>
                  </div>
                  <span className="subtitle">Forever</span>
                </div>
      
                <div className="separator-animated animated-true mt--30 mb--30"></div>
              </div>
      
              <div className="pricing-body">
                <ul className="list-style--1">
                  <li><i className="feather-check-circle pe-2"></i>21,000 Words per Month</li>
                  <li><i className="feather-check-circle pe-2"></i>Maintain Formatting</li>
                  <li><i className="feather-check-circle pe-2"></i>Upto 300 Word per article</li>
                  <li><i className="feather-check-circle pe-2"></i>Beat ZeroGPT Detector</li>
                  <li><i className="feather-check-circle pe-2"></i>10+ Languages</li>
                  <li><i className="feather-check-circle pe-2"></i>Email Support</li>
                </ul>
              </div>
            </div>
      
            <div className="pricing-footer">
              { session ?
                <a className="btn-default btn-border" href="/humanizer">Try it now</a>
                :
                <a className="btn-default btn-border" href="/signup">Try it now</a>
              }
            </div>
      
          </div>
        </div>
      </div>      
    )
}