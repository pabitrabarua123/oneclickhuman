export default function FreeItem({parentClass, incresePrice}) {
    return(
      <div className={`${parentClass} ${!incresePrice ? "mt--30" : ""}`}>
       <div className="rainbow-pricing style-chatenai">
          <div class="pricing-table-inner bg-flashlight">
            
            <div class="pricing-top">
              <div class="pricing-header">
                <h4 class="title">Basic</h4>
                
                <div class="pricing">
                  <div class="price-wrapper">
                    <span class="price">Free</span>
                  </div>
                  <span class="subtitle">Forever</span>
                </div>
      
                <div class="separator-animated animated-true mt--30 mb--30"></div>
              </div>
      
              <div class="pricing-body">
                <ul class="list-style--1">
                  <li><i class="feather-check-circle pe-2"></i>21,000 Words per Month</li>
                  <li><i class="feather-check-circle pe-2"></i>Maintain Formatting</li>
                  <li><i class="feather-check-circle pe-2"></i>Upto 300 Word per article</li>
                  <li><i class="feather-check-circle pe-2"></i>Beat ZeroGPT Detector</li>
                  <li><i class="feather-check-circle pe-2"></i>10+ Languages</li>
                  <li><i class="feather-check-circle pe-2"></i>Email Support</li>
                </ul>
              </div>
            </div>
      
            <div class="pricing-footer">
              <a class="btn-default btn-border" href="/humanizer">Try it now</a>
            </div>
      
          </div>
        </div>
      </div>      
    )
}