import React from 'react';

const FeedbackOptions = ({
  optionsGood,
  optionsNeutral,
  optionsBad,
  options,
  onLeaveFeedback,
}) => {
  return options.map(option => {
    return (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
  // return (
  //   <>
  // <button type="button" onClick={optionsGood}>
  //   Good
  // </button>
  //     <button type="button" onClick={optionsNeutral}>
  //       Neutral
  //     </button>
  //     <button type="button" onClick={optionsBad}>
  //       Bad
  //     </button>
  //   </>
  // );
};

export default FeedbackOptions;
