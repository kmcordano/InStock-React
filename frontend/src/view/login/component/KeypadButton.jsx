import PropTypes from 'prop-types';

import '../style/KeypadButton.css';

const KeypadButton = ({text, clickFunction}) => {
   return (
      <div className="KeypadButton" onClick={clickFunction}>{text}</div>
   );
};

KeypadButton.propTypes = {
   clickFunction : PropTypes.func,
   text          : PropTypes.string
};

export default KeypadButton;