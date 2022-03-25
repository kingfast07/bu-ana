import "./Review.css";
import Album from "./Album";
import baksoImg from "../img/bakso.jpg";
import makanImg from "../img/makanan.jpg";
import colaImg from "../img/cola.jpeg";
import { useState } from "react";

const Review = () => {
  const reviewDeni = [
    {
      title: "BAKSO",
      desc: "Bakso nya keliatan enak banget kayanya bu, tapi sayang kita ngga nyicip karna keabisan wkwk",
      img: baksoImg,
    },
    {
      title: "MAKAN SIANG",
      desc: "Nyam... nyamm... Enak debes",
      img: makanImg,
    },
    {
      title: "COCA COLA",
      desc: "Seger pokoknya, cola dingin emang paling pas disatuin ama es krim :)",
      img: colaImg,
    },
  ];

  const reviewAsyraf = [
    {
      title: "COCA COLA",
      desc: "Eskrimmnya mana buu..saya jauh2 dari palembang mencari eskrimm. Untung ada pengganti nya coca-cola",
      img: colaImg,
    },
    {
      title: "BAKSO",
      desc: 'Bakso nya enak di pandang bu. Sayangnya tidak bisa dimiliki :"(',
      img: baksoImg,
    },
    {
      title: "MAKAN SIANG",
      desc: "Makan siangnya enak banget... sayang cuma sebentar disana, tadi nya kalo sempet mau saya bungkus itu asinan nya bu xixixi",
      img: makanImg,
    },
  ];

  const [show, setShow] = useState(false);

  const showMore = (e) => {
    setShow(true);
  };

  return (
    <div className="review">
      <h2>LET'S GO</h2>
      <p>
        Awalnya kita kepikiran buat web foto kenang-kenangan yang manis tapi
        baru inget kalau kita ngga pernah foto bareng, jadi dengan otak yang
        genius web ini kita buat khusus untuk mereview pernikahannya bu ana,
        hehe :)
      </p>
      <p>(baris pertama dari deni, baris kedua dari asyraf)</p>
      <Album reviews={reviewDeni} />
      {show ? (
        <Album reviews={reviewAsyraf} />
      ) : (
        <button onClick={showMore}>SHOW MORE</button>
      )}
    </div>
  );
};

export default Review;
