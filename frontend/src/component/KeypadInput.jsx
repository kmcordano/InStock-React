import PropTypes from 'prop-types';

import '../css/KeypadInput.css';

const KeypadInput = ({ value }) => {
   return (
      <div className="KeypadInput">
         <input type="text" value={value} disabled />
      </div>
   );
};

KeypadInput.propTypes = {
   value : PropTypes.string
}

export default KeypadInput;
