const SingleCart = ({ item }) => {
  return (
    <div className="cartsWrapper">
      <div className="personeImage">
        <img src={item.img} alt="" />
      </div>
      <div className="cartInfoWrapper">
        <span className="workPosition">{item.workPosition}</span>
        <div className="cartInfo">{item.cartInfo}</div>
        <div className="salaryAndName">
          <span className="salary">{item.salary}</span>
          <span className="name">{item.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
