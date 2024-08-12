import PropTypes from 'prop-types';

import '../css/KeypadButton.css';

const KeypadButton = ({text}) => {
   return (
      <div className="KeypadButton">{text}</div>
   );
};

KeypadButton.propTypes = {
   text : PropTypes.string
}

export default KeypadButton;