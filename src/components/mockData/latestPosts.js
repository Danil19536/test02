import blogImg1 from "../../images/blog/blogImg1.jpg";
import blogImg2 from "../../images/blog/blogImg2.jpg";
import blogImg3 from "../../images/blog/blogImg3.jpg";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
const blogIcon1 = <AiOutlineClockCircle />;
const blogIcon2 = <AiOutlinePlayCircle />;
const blogIcon3 = <AiOutlineFileText />;
const latestPost = [
  {
    img: blogImg1,
    icon: <BiMicrophone />,
    iconClock: blogIcon1,
    textBtn: "Podcast",
    workPositionCart: "Marketing | ",
    data: " September 4, 2020 | ",
    time: " 36 min",
    qustions: "What is traffic arbitrage and does it really make money?",
    respo:
      "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    textCartLink: "Listen",
    id: 1,
  },
  {
    img: blogImg2,
    icon: blogIcon2,
    iconClock: blogIcon1,
    textBtn: "Video",
    workPositionCart: "Marketing | ",
    data: "August 25, 2020 | ",
    time: " 45 min",
    qustions: "What is traffic arbitrage and does it really make money?",
    respo:
      "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    textCartLink: "Listen",
    id: 2,
  },
  {
    img: blogImg3,
    icon: blogIcon3,
    textBtn: "Article",
    workPositionCart: "Design | ",
    data: "August 8, 2020",
    time: "",
    qustions: "What is traffic arbitrage and does it really make money?",
    respo:
      "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    textCartLink: "Listen",
    id: 3,
  },
];

export default latestPost;
