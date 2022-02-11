import SingleStep from "./SingleStep";
import progressIlustration from "../../../images/ilustritions/illustrationProgress.png";
const StudentProgress = ({ stepArr }) => {
  const renderStepsItem = stepArr.map((item) => {
    return <SingleStep key={item.id} item={item} />;
  });

  return (
    <div className="container">
      <div className="studentProgressWrapper">
        <div className="containerWrapper">
          <div className="headerStudentProgress">
            <div className="progressTitle">Studying process</div>
            <div className="progressSubTitle">That’s how we do it</div>
          </div>
          <div className="progressSteps">{renderStepsItem}</div>
        </div>
        <img src={progressIlustration} alt="" />
      </div>
    </div>
  );
};

export default StudentProgress;
