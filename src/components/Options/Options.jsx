import css from './Options.module.css'

function Options({ updateFeedback }) {
  const handleClick = feedbackType => {
    updateFeedback(feedbackType);
  };

  return (
    <div className={css.feedbackButtonsList}>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
    </div>
  );
}

export default Options;