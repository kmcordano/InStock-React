import PropTypes from 'prop-types';

import KeypadButton from './KeypadButton';
import KeypadInput from './KeypadInput';

import '../css/Keypad.css';

const Keypad = ({ employeeNumber, setEmployeeNumber, submitInput}) => {
   const handleClick = (event) => {
      switch(event.target.textContent) {
         case 'back':
            setEmployeeNumber('');
            break;
         case 'enter':
            submitInput();
            setEmployeeNumber('');
            break;
         default:
            setEmployeeNumber(employeeNumber + event.target.textContent);
            break;
      }
   };
   
   return (
      <div className="Keypad">
         <KeypadButton text="back"  clickFunction={handleClick} />
         <KeypadButton text="0"     clickFunction={handleClick} />
         <KeypadButton text="enter" clickFunction={handleClick}/>
         <KeypadButton text="1"     clickFunction={handleClick} />
         <KeypadButton text="2"     clickFunction={handleClick} />
         <KeypadButton text="3"     clickFunction={handleClick} />
         <KeypadButton text="4"     clickFunction={handleClick} />
         <KeypadButton text="5"     clickFunction={handleClick} />
         <KeypadButton text="6"     clickFunction={handleClick} />
         <KeypadButton text="7"     clickFunction={handleClick} />
         <KeypadButton text="8"     clickFunction={handleClick} />
         <KeypadButton text="9"     clickFunction={handleClick} />
         <KeypadInput value={employeeNumber}/>
      </div>
   );
};

Keypad.propTypes = {
   employeeNumber    : PropTypes.string,
   setEmployeeNumber : PropTypes.func,
   submitInput       : PropTypes.func
}

export default Keypad;