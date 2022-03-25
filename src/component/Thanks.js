import tearImg from "../img/tear.png";
import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks">
      <img className="tear-top" src={tearImg} alt="test" />
      <div className="text">
        <h1>TERIMAKASIH BU</h1>
        <h2>UDAH JADI YANG PALING SABAR</h2>
      </div>
      <img className="tear-bottom" src={tearImg} alt="test" />
    </div>
  );
};

export default Thanks;
