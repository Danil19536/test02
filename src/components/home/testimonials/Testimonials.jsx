import userImg from "../../../images/User/user.png";
import rectangImg from "../../../images/User/rectangle.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
const Testimonials = () => {
  return (
    <div className="containerWrapper">
      <div className="container">
        <div className="contentWrapper">
          <div className="testimonialsInfo">
            <div className="testimonialsTitle">TESTIMONIALS</div>
            <div className="testimonialsSubTitle">What our students say</div>
          </div>
          <div className="commentaryWrapper">
            <div className="arrowsLeft">
              <a href="*">
                <BsArrowLeft />
              </a>
            </div>
            <div className="commentary">
              <div className="textContentWrapper">
                <div className="Rectangle1">
                  <img src={rectangImg} alt="" />
                </div>
                <div className="Rectangle2">
                  <img src={rectangImg} alt="" />
                </div>
                <div className="textContent">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Justo, amet lectus quam viverra mus lobortis fermentum amet,
                    eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                    ornare turpis quis non. Congue tortor in euismod vulputate
                    etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                    integer in.
                  </p>
                </div>
              </div>
              <div className="user">
                <img src={userImg} alt="" />
                <div className="userInfo">
                  <div className="nameUser">Eleanor Pena</div>
                  <div className="positionUser">Position, Course</div>
                </div>
              </div>
            </div>
            <div className="arrowsRight">
              <a href="*">
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="lines">
          <div className="line firstLine"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
