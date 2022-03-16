import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { UsersContext } from "./context";

export let dispatchUsers = null;

export const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState);

  dispatchUsers = dispatch;

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};
