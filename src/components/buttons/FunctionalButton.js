import "./FunctionalButton.css";

const FunctionalButton = ({ id, fn, btnClass, text }) => {
  return (
      <button onClick={() => fn(id)} className={btnClass}>
        {text}
      </button>
  );
};

export default FunctionalButton;