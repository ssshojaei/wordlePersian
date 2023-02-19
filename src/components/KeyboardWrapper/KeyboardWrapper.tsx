import React from "react";
import SimpleKeyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import TKeyboardWrapperProps from "./Keyboard.type";

const layout = {
  default: [
    "چ ج ح خ ه ع غ ف ق ث ص ض",
    "گ ک م ن ت ا ل ب ی س ش",
    "{bksp} و پ د ذ ر ز ژ ط ظ",
  ],
};

const KeyboardWrapper = ({
  onChange,
  keyboardRef,
  onKeyPress,
}: TKeyboardWrapperProps) => {
  return (
    <div className="max-w-lg mx-auto mt-5">
      <SimpleKeyboard
        onKeyPress={onKeyPress}
        keyboardRef={(r) => (keyboardRef.current = r)}
        onChange={onChange}
        layout={layout}
        autoUseTouchEvents
        disableButtonHold
        physicalKeyboardHighlight
      />
    </div>
  );
};

export default KeyboardWrapper;
