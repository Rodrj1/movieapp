import "./ReviewUI.css";

const ReviewUI = ({ review }) => {

  const USERNAME = review.author_details.username;
  const NAME = review.author_details.name;
  const RATING = review.author_details.rating;
  const CONTENT = review.content;
  const CONTENT_DATE = review.created_at;

  return (
    <div className="review-container">
      <h1>
        {NAME} - {RATING} <i className="fa-solid fa-star fa-2xs" /> {CONTENT_DATE}
      </h1>
      <h2>username: {USERNAME}</h2>
      <p>{CONTENT}</p>
    </div>
  );
};

export default ReviewUI;
