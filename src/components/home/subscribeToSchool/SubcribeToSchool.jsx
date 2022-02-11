import ilustrImgSchool from "../../../images/ilustritions/illustrationSchool.png";
const SubcribeToSchool = () => {
  return (
    <div className="schoolContentWrapper">
      <div className="ilustrationSchool">
        <img src={ilustrImgSchool} alt="" />
      </div>
      <div className="ilustrationSchool two">
        <img src={ilustrImgSchool} alt="" />
      </div>
      <div className="container">
        <div className="schoolTitle">Don’t miss anything</div>
        <div className="schoolSubTitle">
          Subscribe to the Createx School announcements
        </div>
        <div className="emainAndBtnWrapper">
          <div className="email">
            <input type="email" placeholder="Your working email" />
          </div>
          <div className="btnSubsc">
            <button className="subsc">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcribeToSchool;
