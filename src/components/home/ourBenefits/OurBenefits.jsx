import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import onlineLib from "../../../images/Vector.svg";
import ilustrationOurBen from "../../../images/ilustritions/illustrationOurBenefints.png";
const OurBenefits = () => {
  return (
    <div className="container">
      <div className="benefitsInfo">
        <div className="benefitsTitle">Our benefits</div>
        <div className="benefitsDescr">That’s how we do it</div>
      </div>
      <div className="benefitsLinks">
        <button className="link-item active">
          <AiOutlineStar />
          <span>Experienced Tutors</span>
        </button>
        <button className="link-item">
          <AiOutlineLike />
          <span>Feedback & Support</span>
        </button>
        <button className="link-item">
          <img src={onlineLib} alt="" />
          <span>24/7 Online Library</span>
        </button>
        <button className="link-item">
          <FaRegComment />
          <span>Community</span>
        </button>
      </div>

      <div className="mainInfoOurBenefits">
        <div className="subtitle">
          <div className="mainTitleBen">Only practicing tutors</div>
          <p>
            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
            dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
            mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum
            diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa
            ut amet. Amet enim, nisi tempus vehicula.
          </p>
        </div>
        <img src={ilustrationOurBen} alt="" />
      </div>
    </div>
  );
};

export default OurBenefits;
