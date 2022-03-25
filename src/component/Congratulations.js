import "./Congratulations.css";
import photo1 from "../img/photo-1.png";
import photo2 from "../img/photo-2.png";

const Congratulations = () => {
  return (
    <div class="photo">
      <div class="img-container">
        <img src={photo1} alt="" />
      </div>
      <div class="text-container">
        <h1>HAPPY MARRIAGE</h1>
        <p>"Here's to a lifetime full of happiness and love"</p>
      </div>
      <div class="text-container" id="swap">
        <h1>HAPPILY EVER AFTER</h1>
        <p>
          Bahagia selalu bu ana, tolong jangan kasih tau pak joan kalau anak
          teladan nya suka jail smile :)
        </p>
      </div>
      <div class="img-container">
        <img src={photo2} alt="" />
      </div>
    </div>
  );
};

export default Congratulations;
