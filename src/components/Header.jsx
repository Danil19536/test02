import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>
            Home <FaBeer />{" "}
          </Link>
        </li>
        <li>
          <Link to="/about">
            About <BsPersonCircle />{" "}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
