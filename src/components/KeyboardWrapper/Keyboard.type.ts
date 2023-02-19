import { MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

type TKeyboardWrapperProps = {
  onChange: (input: string) => void;
  onKeyPress: ((button: string, e?: MouseEvent | undefined) => any) | undefined;
  keyboardRef: MutableRefObject<typeof Keyboard>;
};

export default TKeyboardWrapperProps;
