import Ally from "./Ally";
const Allies = ({ allyArr }) => {
  const renderAllies = allyArr.map((item) => {
    return <Ally key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <div className="hederAlliesInfo">
        <div className="alliesTitle">Best tutors are all here</div>
        <div className="alliesSubTitle">Meet our team</div>
      </div>
      <div className="alliesWrapper">{renderAllies}</div>
    </div>
  );
};

export default Allies;
