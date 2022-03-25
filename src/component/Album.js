const Album = ({ reviews }) => {
  return (
    <div className="album">
      {reviews.map((review, key) => {
        return (
          <div key={key} className="album-item">
            <div className="album-img">
              <img src={review.img} alt="" />
            </div>
            <div class="album-info">
              <div className="album-title">{review.title}</div>
              <div className="album-description">{review.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
