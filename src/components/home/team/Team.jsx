import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import SingleTimate from "./SingleTimate";
const Team = ({ timates }) => {
  const soloTimate = timates.map((item) => {
    return <SingleTimate item={item} />;
  });

  return (
    <div className="container">
      <div className="teamContent">
        <div className="teamInfo">
          <div className="titleandSubTitleWrapper">
            <div className="TeamTitle">Best tutors are all here</div>
            <div className="teamSubTitle">Meet our team</div>
          </div>
          <div className="arrowsWrapper">
            <div className="arrows">
              <a href="*">
                <BsArrowLeft />
              </a>
              <a href="*">
                <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="timates">{soloTimate}</div>
      </div>
    </div>
  );
};

export default Team;
