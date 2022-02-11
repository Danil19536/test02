import SingleBlogCart from "./SingleBlogCart";
const Blog = ({ latestPost }) => {
  const blogCart = latestPost.map((item) => {
    return <SingleBlogCart key={item.id} item={item} />;
  });
  return (
    <div className="container">
      <div className="blogHeader">
        <div className="blogInfo">
          <div className="blogTitle">Our blog</div>
          <div className="blogSubTitle">Latest posts</div>
        </div>
        <div className="goToBlog">
          <button className="goBlogBtn"> Go to blog</button>
        </div>
      </div>
      <div className="blockCartWrapper">{blogCart}</div>
    </div>
  );
};

export default Blog;
