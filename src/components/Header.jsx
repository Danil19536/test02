import playShow from "../images/logo/hover.png";
import ilustration from "../images/ilustritions/ilustration.png";
import ellipse from "../images/ellipse.png";
import HeaderMenu from "./HeaderMenu";
const Header = () => {
  return (
    <header>
      <HeaderMenu />
      <div className="headerContainer">
        <div className="container">
          <div className="headerContent">
            <div className="headerinfo">
              <div className="playShow">
                <img src={playShow} alt="*" />
                Play showreel
              </div>
              <div className="headerText">
                Enjoy studying with Createx Online Courses
              </div>
              <div className="btns">
                <button className="aboutUs">About Us</button>
                <button className="exploreCourses">Explore courses</button>
              </div>
            </div>
            <div className="ilustration">
              <img src={ilustration} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottomInfo">
            <ul className="showInfo">
              <li>
                <span>1200</span>
                Students graduated
                <img src={ellipse} alt="" />
              </li>
              <li>
                <span>84</span>
                Completed courses
                <img src={ellipse} alt="" />
              </li>
              <li>
                <span>16</span>
                Qualified tutors
                <img src={ellipse} alt="" />
              </li>
              <li>
                <span>5</span>
                Years of experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
