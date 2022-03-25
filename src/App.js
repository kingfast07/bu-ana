import "./style.css";
import Hero from "./component/Hero";
import Review from "./component/Review";
import Congratulations from "./component/Congratulations";
import Thanks from "./component/Thanks";
import Video from "./component/Video";
import weddingsPhoto from "./img/weddings.png";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="center">
      <Hero />
      <Review />
      <Congratulations />

      <Thanks />
      <Video />
      <img src={weddingsPhoto} style={{ padding: "20px" }} alt="" />
      <Footer />
    </div>
  );
}

export default App;
