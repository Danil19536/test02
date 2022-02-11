const singleItemCore = ({ item }) => {
  return (
    <div className="singleItem">
      <div className="itemImg">
        <img src={item.img} alt="" />
      </div>
      <div className="itemTitle">{item.title}</div>
      <div className="itemDescr">{item.descr}</div>
    </div>
  );
};

export default singleItemCore;
