import KeypadButton from './KeypadButton';
import KeypadInput from './KeypadInput';

import '../css/Keypad.css';

const Keypad = () => {
   return (
      <div className="Keypad">
         <KeypadButton text="back" />
         <KeypadButton text="0" />
         <KeypadButton text="enter" />
         <KeypadButton text="1" />
         <KeypadButton text="2" />
         <KeypadButton text="3" />
         <KeypadButton text="4" />
         <KeypadButton text="5" />
         <KeypadButton text="6" />
         <KeypadButton text="7" />
         <KeypadButton text="8" />
         <KeypadButton text="9" />
         <KeypadInput />
      </div>
   );
};

export default Keypad;