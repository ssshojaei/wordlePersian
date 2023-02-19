export type TStatus = "correct-spot" | "wrong-spot" | "not-found" | "empty";

type TBoxProps = {
  children?: string;
  status: TStatus;
};

export default TBoxProps;
