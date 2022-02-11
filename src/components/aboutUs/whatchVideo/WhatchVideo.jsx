import smallImg from "../../../images/WhatchVideo/small.png";
import whatchVideo from "../../../images/WhatchVideo/WhatchToVideo.png";
const WhatchVideo = () => {
  return (
    <div className="whachVideo">
      <div className="container">
        <div className="playBtnWrapper">
          <img src={smallImg} alt="*" />
          Watch Video
        </div>
        <div className="countStudensInYear">
          <div className="imgStudents">
            <img src={whatchVideo} alt="" />
          </div>
          <div className="countStudentInfo">
            <ul className="info">
              <li className="infoItem">
                <span>1200</span>
                students graduated
              </li>
              <li className="infoItem">
                <span>84</span>
                completed courses
              </li>
              <li className="infoItem">
                <span>16</span>
                qualified tutors
              </li>
              <li className="infoItem">
                <span>5</span>
                years of experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatchVideo;
