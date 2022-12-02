import PropTypes from 'prop-types';
import { TitleText } from './Section.style';

const Section = ({ title, children }) => {
  return (
    <div>
      <TitleText>{title}</TitleText>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
