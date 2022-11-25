import React from 'react';

const Notification = ({ message, children, totalFeedback }) => {
  return <>{totalFeedback() >= 1 ? children : <p>{message}</p>}</>;
};

export default Notification;
