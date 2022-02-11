import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../../images/logo/logo.png";
import playShow from "../../../images/WhatchVideo/small.png";
import ilustration from "../../../images/ilustritions/ilustrationAboutUs.png";

const HeaderAboutUs = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="headerWrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="headerMenuWrapper">
            <ul className="menu">
              <li className="menu-item">
                <a href="#">About Us</a>
              </li>
              <li className="menu-item">
                <a href="#">Courses </a>
              </li>
              <li className="menu-item">
                <a href="#">Events</a>
              </li>
              <li className="menu-item">
                <a href="#">Blog </a>
              </li>
              <li className="menu-item">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="getConsultationBtn">
            <button className="getcon">Get consultation</button>
          </div>
          <div className="logInOrRegister">
            <BsFillPersonFill />
            <a href="#">Log in / Register</a>
          </div>
        </div>
        <div className="container">
          <div className="headerAboutUsContent">
            <div className="headerinfo">
              <div className="headerTitle">About us</div>
              <div className="headerAbotUsTwoTitle">Createx Online School </div>
              <div className="headerSubTitle">
                Createx Online School is a leader in online studying. We have
                lots of courses and programs from the main market experts.
              </div>
              <div className="headerDescr">
                We provide relevant approaches to online learning, internships
                and employment in the largest companies in the country. Our
                educational programs help you get a new specialty from scratch.
                During your studies, we will help you find a job. Check the
                courses and online events that we organise.
              </div>
              <div className="btns">
                <button className="aboutUs">Explore events</button>
                <button className="exploreCourses">Browse courses</button>
              </div>
            </div>
            <div className="ilustration">
              <img src={ilustration} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAboutUs;
