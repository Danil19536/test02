import SingleCart from "./SingleCart";

const ReadToLearnt = ({ mass }) => {
  const elements = mass.map((item) => {
    return <SingleCart item={item} />;
  });

  return (
    <div className="container">
      <div className="readToLearnWrapper">
        <div className="titleReadToLearn">
          <span className="ready">Ready to learn?</span>
          <div className="descr">Featured Courses</div>
        </div>
        <button className="ViewAllCourses">View all courses</button>
      </div>

      <div className="readToLearnCarts">{elements}</div>
    </div>
  );
};

export default ReadToLearnt;
