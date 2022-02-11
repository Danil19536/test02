import { BsArrowRight } from "react-icons/bs";

const labelColors = {
  Marketing: "#03CEA4",
  Management: "#5A87FC",
  hr: "#F89828",
  Design: "#F52F6E",
  Development: "#7772F1",
};

const singleItemDirectories = ({ item }) => {
  let color = labelColors[item.activity];
  if (item.activity === "HR & Recruting") {
    color = labelColors.hr;
  }
  return (
    <div className="directoriesItem">
      <div className="directoriesImg">
        <img src={item.image} alt="" />
      </div>
      <div className="directoriesInfo">
        <span style={{ background: color }}>{item.activity}</span>
        <p>{item.text}</p>
        <div className="checkCourseBtn">
          <button>
            Check courses <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default singleItemDirectories;
