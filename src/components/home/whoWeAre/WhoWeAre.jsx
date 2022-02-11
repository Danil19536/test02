import check from "../../../images/check.png";
import imageWhoWeAre from "../../../images/WhoAreImages/imageWhoWeAre.jpg";
const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="WhoWeAreWrapper">
        <div className="moreQuestion">
          <img src={imageWhoWeAre} alt="*" />
          <div className="wrapper">
            <div className="title">Who we are</div>
            <div className="question">Why Createx?</div>
            <ul className="questions">
              <li>
                <img src={check} alt="" />
                <span>
                  A fermentum in morbi pretium aliquam adipiscing donec tempus
                </span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>Vulputate placerat amet pulvinar lorem nisl.</span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>Etiam duis lobortis in fames ultrices commodo nibh.</span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>Tincidunt sagittis neque sem ac eget.</span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>
                  Ultricies amet justo et eget quisque purus vulputate dapibus
                  tortor.
                </span>
              </li>
            </ul>
            <button className="moreAboutUs">More about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
