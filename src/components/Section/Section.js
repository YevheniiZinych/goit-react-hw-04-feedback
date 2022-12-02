import PropTypes from 'prop-types';
import { titleText } from './Section.style';

const Section = ({ title, children }) => {
  return (
    <div>
      <titleText>{title}</titleText>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
