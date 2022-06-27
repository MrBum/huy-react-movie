import {useReducer} from "react";
import Context from "./Context";
import reducer, {initState, initState1} from "./Reducer";
function Provider({children}) {
  // const stateContext = useContext(Context)
  const [state, dispatchContext] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatchContext]}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
