// arrays
import coreItem from "./mockData/itemArr";
import stepArr from "./mockData/singleStep";
import allyArr from "./mockData/allyArray";
import dicerctoriArr from "./mockData/directoriesArray";
import latestPost from "./mockData/latestPosts";

// files
import Footer from "./footer/footer";
import HeaderAboutUs from "./aboutUs/headerAboutUs/HeaderAboutUs";
import WhatchVideo from "./aboutUs/whatchVideo/WhatchVideo";
import OurCoreValues from "./aboutUs/ourCoreValues/OurCoreValues";
import StudentProgress from "./aboutUs/studentsProgress/StudentProgres";
import OutWorkhere from "./aboutUs/outWorkHere/OutWorkHere";
import Allies from "./aboutUs/allies/MyAllies";
import SubcribeToSchool from "./home/subscribeToSchool/SubcribeToSchool";
import Derection from "./aboutUs/mainDerection/Direction";
import Blog from "./home/blog/Blog";
import User from "./home/testimonials/Testimonials";

const About = () => {
  return (
    <div>
      <HeaderAboutUs />
      <WhatchVideo />
      <OurCoreValues coreItem={coreItem} />
      <Derection dicerctoriArr={dicerctoriArr} />
      <StudentProgress stepArr={stepArr} />
      <Allies allyArr={allyArr} />
      <User />
      <OutWorkhere />
      <Blog latestPost={latestPost} />
      <SubcribeToSchool />
      <Footer />
    </div>
  );
};

export default About;
