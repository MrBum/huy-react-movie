import Context from "./Context";
import {useContext} from "react";

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
export const useStoreUpComing = () => {
  const [state1, dispatch1] = useContext(Context);
  return [state1, dispatch1];
};
