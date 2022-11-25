import React from 'react';

const Statistics = ({
  totalFeedback,
  good,
  neutral,
  bad,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good:{good} </p>
      <p>Neutral:{neutral} </p>
      <p>Bad:{bad} </p>
      <p>Total:{totalFeedback()} </p>
      <p>Positive feedback: {totalFeedback() > 0 && positivePercentage()} %</p>
    </>
  );
};

export default Statistics;
