import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const SingleTimate = ({ item }) => {
  return (
    <div className="timate">
      <div className="imgTimateAndInfo">
        <div className="imgTemate">
          <div className="gradientBg">
            <img src={item.imageTimeta} alt="" />
            <div className="media">
              <FaFacebookF />
              <AiOutlineInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="nameAndPos">
          <div className="name">{item.name}</div>
          <div className="position">{item.pos}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleTimate;
