import "./ReviewUI.css";

const ReviewUI = ({ review }) => {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const USERNAME = review.author_details.username;
  const NAME = review.author_details.name;
  const AVATAR_PATH = review.author_details?.avatar_path;
  const AVATAR_ORIGINAL_PATH = `https://secure.gravatar.com/avatar/${AVATAR_PATH}`;
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
