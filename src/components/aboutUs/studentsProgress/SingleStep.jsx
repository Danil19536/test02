const SingleStep = ({ item }) => {
  return (
    <div className="stepsWrapper">
      <div className="step">
        <div className="stepCount">{item.stepCount}</div>
        <div className="stepTitle">{item.title}</div>
        <div className="stepSubTitle">{item.subTitle}</div>
      </div>
      <img src={item.circle} alt="" />
    </div>
  );
};

export default SingleStep;
