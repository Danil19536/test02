import { BsArrowRight } from "react-icons/bs";
import { BsCalendar2 } from "react-icons/bs";
const SingleBlogCart = ({ item }) => {
  return (
    <div className="cartWrapper">
      <div className="headerACart">
        <div className="imgAndbtn">
          <img src={item.img} alt="*" />
          <div className="cartBtn">
            <button className="blogItemBtn">
              {item.icon}
              <span>{item.textBtn}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="dataAndTimePostCart">
        <div className="workPositinnCart">{item.workPositionCart}</div>
        <div className="DataPostAndTime">
          <span>
            <BsCalendar2 />
            {item.data}
          </span>
          <span>
            {item.iconClock}
            {item.time}
          </span>
        </div>
      </div>
      <div className="textContentCart">
        <div className="qustionsCart">{item.qustions}</div>
        <div className="respo">{item.respo}</div>
      </div>
      <div className="cartLink">
        {item.textCartLink}
        <BsArrowRight />
      </div>
    </div>
  );
};

export default SingleBlogCart;
