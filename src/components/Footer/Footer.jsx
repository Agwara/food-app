import React from "react"

import "./Footer.css"

import messageIcon from "../../assets/envelope.svg";
import phoneIcon from "../../assets/phone.svg";
import facebookIcon from "../../assets/facebook.svg"
import twitterIcon from "../../assets/twitter.svg"
import youtubeIcon from "../../assets/youtube.svg"

import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import AngleIconSVG from "../AngleIconSVG/AngleIconSVG"
import useWindowWidth from "../../hooks/useWindowWidth"

const Footer = () => {
  const [showMore, setShowMore] = React.useState(true)
  const width = useWindowWidth()

  const breakPoint = 656;

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }


  const renderLegal = () => (
    <div className="footer__legal">
      <p className="footer__legal-text">
        Delivery Guarantee: A minimum order of N3000 is required to qualify for free delivery.
        FREE delivery applies to predetermined areas around each Agwara’s outlet. Please ask your
        closest Agwara’s Pizza outlet if you fall within their specified delivery area. Our Delivery
        Experts are not penalized for late deliveries.
      </p>

      <p className="footer__legal-text">
        The hours of operation may vary by store. Valid for the Delivery Service and Carry-Out of Agwara's
        Pizza Nigeria stores. Agwara's Pizza reserves the right to make unannounced price changes. Our 
        delivery experts provide change up to N7500. Please note that checks or bank transfers, are not 
        accepted as payment method. The data provided by customers will be included in the user and promotional
        database, owned by Nnaemeka N Uti Ltd. Prices include VAT & other Taxes.
      </p>
    </div>
  )

  const renderConnect = () => (
    <div className="footer__connect">
      <p>CONNECT WITH US</p>

      <div className="footer__connect-icons"> 
        <img 
          alt="FacebookIcon"
          src={facebookIcon}
          className="footer__connect--icon-1"
        />
        <img 
          alt="TwitterIcon"
          src={twitterIcon}
          className="footer__connect--icon-2"
        />
        <img 
          alt="YoutubeIcon"
          src={youtubeIcon}
          className="footer__connect--icon-3"
        />
      </div>
    </div>
  )

  const renderCopyRight = () => (
    <div className="footer-copyright">
      <p>Copyright © 2021 Agwarafoods.com. All rights reserved</p>
    </div> 
  )



  return (
    <div className="footer">
      <div className="footer__contact-container">
        <div className="footer__contact-content">
          <div className="footer__contact--support">
            <div className="footer__contact--email">
              <img 
                alt="MessageIcon"
                src={messageIcon}
                className="footer___message-icon"
              />
              <div className="footer__contact-support-text--container">
                <p className="footer__contact-support__title">EMAIL SUPPORT</p>

                <p className="footer__contact-support__email">help@agwara.com</p>
              </div>
            </div>

            <div className="footer__contact--email center-container">
              <img 
                alt="PhoneIcon"
                src={phoneIcon}
              />
              <div className="footer__contact-support-text--container">
                <p className="footer__contact-support__title">PHONE SUPPORT</p>

                <p className="footer__contact-support__email">07064839441, 07016250885</p>
              </div>
            </div>
          </div>

          <div className="footer__subscription">
            <EmailSubscription />
          </div>
        </div>
      </div>

      <div className="footer__content">
        {
          width < breakPoint ? 
            <div className="footer__showmore" onClick={toggleShowMore}>
              <p>{showMore ? "Show Less" : "Show More"}</p>

              <div className={showMore ? "footer__icon-rotate180" : "footer__icon-rotate360"}>
                <AngleIconSVG colour="#b5b5b5" height={40} width={40} />
              </div>
            </div> : <></>
        }

        {
          showMore ? renderLegal() : (width > breakPoint) ? renderLegal() : <></>
        }


        {
          showMore ? renderConnect() : (width > breakPoint) ? renderConnect() : <></>
        }
      </div>

      {
        showMore ? renderCopyRight() : (width > breakPoint) ? renderCopyRight() : <></>
      }
    </div>
  )
}

export default Footer;