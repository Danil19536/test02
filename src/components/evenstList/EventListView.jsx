import { BsArrowRight } from "react-icons/bs";
import SingleEvent from "../home/ourEvents/SingleEvent";
import HeaderMenu from "../HeaderMenu";
const EventListView = ({ eventsList }) => {
  const renderEventsList = eventsList.map((item) => {
    return <SingleEvent key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <div className="headerEventList">
        <HeaderMenu />
        <div className="eventListTitle">Our events</div>
        <div className="eventListSubtitle">
          Lectures, workshops & master-classes
        </div>
      </div>
      <div className="eventsListWrapper">{renderEventsList}</div>
      <div className="counterEventPage">
        <ul className="counter">
          <li className="counterItem">
            <a href="*">1</a>
          </li>
          <li className="counterItem">
            <a href="*">2</a>
          </li>
          <li className="counterItem">
            <a href="*">3</a>
          </li>
          <li className="counterItem">
            <a href="*">4</a>
          </li>
          <li className="counterItem arrowRight">
            <a href="*">
              <BsArrowRight />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventListView;
