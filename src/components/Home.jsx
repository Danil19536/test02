import imageCart from "../images/homeTimates/image1.jpg";
import imageCart2 from "../images/homeTimates/image2.jpg";
import imageCart3 from "../images/homeTimates/image3.jpg";
import imageCart4 from "../images/homeTimates/image4.jpg";
import imageCart5 from "../images/homeTimates/image5.jpg";
import imageCart6 from "../images/homeTimates/image6.jpg";

import latestPost from "./mockData/latestPosts";
import timates from "./mockData/timatesArray";
import events from "./mockData/eventsArray";

import Header from "./Header";
import WhoWeAre from "./home/whoWeAre/WhoWeAre";
import ReadToLearnt from "./home/readToLearn/ReadToLearn";
import OurEvents from "./home/ourEvents/OurEvents";
import OurBenefits from "./home/ourBenefits/OurBenefits";
import Certificates from "./home/certificate/Certificates";
import Team from "./home/team/Team";
import Testimonials from "./home/testimonials/Testimonials";
import Blog from "./home/blog/Blog";
import SubcribeToSchool from "./home/subscribeToSchool/SubcribeToSchool";
import Footer from "./footer/footer";

const Home = () => {
  const mass = [
    {
      workPosition: "Marketing",
      cartInfo: "The Ultimate Google Ads Training Course",
      salary: "$100 ",
      name: " | by Jerome Bell",
      img: imageCart,
      id: 1,
    },
    {
      workPosition: "Management",
      cartInfo: "Prduct Management Fundamentals",
      salary: "$480",
      name: " | by Marvin McKinney",
      img: imageCart4,
      id: 2,
    },
    {
      workPosition: "HR & Recruting",
      cartInfo: "HR  Management and Analytics",
      salary: "$200 ",
      name: " | by Leslie Alexander Li",
      img: imageCart2,
      id: 3,
    },
    {
      workPosition: "Marketing",
      cartInfo: "Brand Management & PR Communications",
      salary: "$530",
      name: " | by Kristin Watson",
      img: imageCart5,
      id: 4,
    },
    {
      workPosition: "Management",
      cartInfo: "Business Development Management",
      salary: "$200 ",
      name: " | by Dianne Russell",
      img: imageCart3,
      id: 5,
    },
    {
      workPosition: "Design",
      cartInfo: "Graphic Design Basic",
      salary: "$500",
      name: " | by Guy Hawkins",
      img: imageCart6,
      id: 6,
    },
  ];

  return (
    <div className="home">
      <Header />
      <WhoWeAre />
      <ReadToLearnt mass={mass} />
      <OurBenefits />
      <OurEvents events={events} />
      <Certificates />
      <Team timates={timates} />
      <Testimonials />
      <Blog latestPost={latestPost} />
      <SubcribeToSchool />
      <Footer />
    </div>
  );
};

export default Home;
