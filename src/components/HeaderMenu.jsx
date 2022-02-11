import logo from "../images/logo/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
const HeaderMenu = () => {
  return (
    <div>
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
    </div>
  );
};

export default HeaderMenu;
