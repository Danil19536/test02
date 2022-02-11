// arrays
import eventsList from "./mockData/eventsListArr";

// files
import EventListView from "./evenstList/EventListView";
import SubcribeToSchool from "./home/subscribeToSchool/SubcribeToSchool";
import Footer from "./footer/footer";

const EventList = () => {
  return (
    <div>
      <EventListView eventsList={eventsList} />
      <SubcribeToSchool />
      <Footer />
    </div>
  );
};

export default EventList;
