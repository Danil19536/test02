import footerLogo from "../../images/logo/footerLogo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="footerInfoWrapper">
            <div className="logo">
              <img src={footerLogo} alt="" />
            </div>
            <div className="logoDescr">
              <p>
                Createx Online School is a leader in online studying. We have
                lots of courses and programs from the main market experts.
                We provide relevant approaches to online learning, internships
                and employment in the largest companies in the country.
              </p>
            </div>
            <div className="socMedia">
              <ul className="mediaIcons">
                <li className="mediaItem">
                  <FaFacebookF />
                </li>
                <li className="mediaItem">
                  <FaTwitter />
                </li>
                <li className="mediaItem">
                  <FaYoutube />
                </li>
                <li className="mediaItem">
                  <FaTelegramPlane />
                </li>
                <li className="mediaItem">
                  <FaLinkedinIn />
                </li>
                <li className="mediaItem">
                  <AiOutlineInstagram />
                </li>
              </ul>
            </div>
          </div>
          <div className="siteMap">
            <div className="siteMapTitle">SITE MAP</div>
            <div className="mapWrapper">
              <ul className="map">
                <li className="mapItem">About Us</li>
                <li className="mapItem">Courses</li>
                <li className="mapItem">Events</li>
                <li className="mapItem">Blog</li>
                <li className="mapItem">Contacts</li>
              </ul>
            </div>
          </div>
          <div className="courses">
            <div className="coursesTitle">COURSES</div>
            <div className="coursesWrapper">
              <ul className="coursesMenu">
                <li className="coursesMenuItem">Marketing</li>
                <li className="coursesMenuItem">Management</li>
                <li className="coursesMenuItem">HR & Recruting</li>
                <li className="coursesMenuItem">Design</li>
                <li className="coursesMenuItem">Development</li>
              </ul>
            </div>
          </div>
          <div className="contactUs">
            <div className="contactTitle">COUNTACT US</div>
            <div className="numberAndEmailWrapper">
              <ul className="numberAndEmail">
                <li className="numberAndEmailItem">
                  <BsPhone /> <span>(405) 555-0128</span>
                </li>
                <li className="numberAndEmailItem">
                  {" "}
                  <MdOutlineEmail /> <span>hello@createx.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="signUpToOurNewsletter">
            <div className="signUpToOurNewsletterTitle">
              SIGN UP TO OUR NEWSLETTER
            </div>
            <div className="sign">
              <input type="email" placeholder="Email address" />
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="studioAndGoToTopWrapper">
        <div className="container">
          <div className="footerContentWrapper">
            <div className="studio">
              © All rights reserved.Made with <BsHeart />
              by Createx Studio
            </div>
            <div className="goToTop">GO TO TOP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
