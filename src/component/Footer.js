import tearImg from "../img/tear.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="tear-top" src={tearImg} alt="test" />
      <div class="footer-content">
        <h2>
          FYI, Bu Ani dikasih deadline sampe desember bu buat nyusul ibu,
          dibantu ya hehe
        </h2>
      </div>
      <img className="tear-bottom" src={tearImg} alt="test" />
    </div>
  );
};

export default Footer;
