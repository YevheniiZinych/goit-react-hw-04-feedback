import PropTypes from 'prop-types';

const Notification = ({ message, children, totalFeedback }) => {
  return <>{totalFeedback() >= 1 ? children : <p>{message}</p>}</>;
};

export default Notification;

Notification.propTypes = {
  totalFeedback: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.element,
};
