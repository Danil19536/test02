import SingleItemCore from "./SingleItemCore";
const OurCoreValues = ({ coreItem }) => {
  const renderCoreItem = coreItem.map((item) => {
    return <SingleItemCore key={item.id} item={item} />;
  });
  return (
    <div className="ourCoreValues">
      <div className="container">
        <div className="coreHeaderWrapper">
          <div className="coreTitle">We always stand for</div>
          <div className="coreSubTitle">Our core values</div>
        </div>
        <div className="coreItemsWrapper">{renderCoreItem}</div>
      </div>
    </div>
  );
};

export default OurCoreValues;
