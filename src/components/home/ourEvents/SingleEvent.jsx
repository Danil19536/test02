const SingleEvent = ({ item }) => {
  return (
    <div className="event">
      <div className="dataEvent">
        {item.data}
        <div className="monthAndTime">
          <div className="month">{item.month}</div>
          <div className="time">{item.time}</div>
        </div>
      </div>
      <div className="eventInfo">
        <div className="mainInfo">{item.mainInfo}</div>
        <div className="Eventdescr">{item.eventDescr}</div>
      </div>
      <button className="viewMore">View more</button>
    </div>
  );
};

export default SingleEvent;
