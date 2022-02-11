import SingleItemDirectories from "./SingleItemDirectories";
const Derection = ({ dicerctoriArr }) => {
  const renderSingleItemDirectories = dicerctoriArr.map((item) => {
    return <SingleItemDirectories key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <div className="headerDirection">
        <div className="directionTitle">our main directions</div>
        <div className="directionSubTitle">What do we teach</div>
      </div>
      <div className="directoriWrapper">
        {renderSingleItemDirectories}
        <div className="lastItemInDirection">
          <span> New studying program coming soon...</span>
        </div>
      </div>
    </div>
  );
};

export default Derection;
