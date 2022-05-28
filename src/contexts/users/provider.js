import { useState } from "react";

import { UsersContext } from "./context";

export let usersActions = null;

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  usersActions = {
    addUser: (newUser) => {
      setUsers([...users, newUser]);
    },
    removeUser: (userForRemove) => {
      setUsers(users.filter((user) => user.id !== userForRemove.id));
    },
  };

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};
