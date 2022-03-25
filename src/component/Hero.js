import tearImg from "../img/tear.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="tear-top" src={tearImg} alt="test" />
      <div className="hero-content">
        <h1>HAPPY WEDDING</h1>
        <h2>Bu Ana & Pak Joan</h2>
      </div>
      <div className="hero-footer">
        <div className="date">20 Maret 2022</div>
        <p>
          Web ini persembahan untuk "guru tercinta" yang udah ngga bisa kita
          ledekin jomblo lagi
        </p>
      </div>
      <img className="tear-bottom" src={tearImg} alt="test" />
    </div>
  );
};

export default Hero;
