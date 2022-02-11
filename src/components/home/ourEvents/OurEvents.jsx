import SingleEvent from "./SingleEvent";

const OurEvents = ({ events }) => {
  const singleElement = events.map((item) => {
    return <SingleEvent item={item} />;
  });
  return (
    <div className="ourEventsWrapper">
      <div className="container">
        <div className="ourEventsInfo">
          <div className="ourEventsTitle">Our Events</div>
          <div className="ourEventDescr">Lectures & workshops</div>
        </div>
        <div className="eventsList">{singleElement}</div>
        <div className="doYouWantMore">
          <div className="questionMore">Do you want more?</div>
          <button className="ExploreAllEvents">Explore all events</button>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
