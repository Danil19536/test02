import imgCli1 from "../../../images/homeCertificate/certificateClient.jpg";
import imgCli2 from "../../../images/homeCertificate/certificateClient2.jpg";
import imgCli3 from "../../../images/homeCertificate/certificateClient3.jpg";
import certificateImage from "../../../images/homeCertificate/officialCertificate.jpg";

const Certificates = () => {
  return (
    <div className="container">
      <div className="certificateContent">
        <div className="certificateInfo">
          <div className="certificateTitle">Createx Certificate</div>
          <div className="certificateSubTitle">
            Your expertise will be confirmed
          </div>
          <div className="cartificateDescr">
            We are accredited by international professional organizations and
            institutes:
          </div>
          <div className="certificateCli">
            <img src={imgCli1} alt="" />
            <img src={imgCli2} alt="" />
            <img src={imgCli3} alt="" />
          </div>
        </div>
        <div className="certificateImg">
          <img src={certificateImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
