import { useState, createContext, useContext } from "react";

const UsersContext = createContext();
const SetUsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={users}>
      <SetUsersContext.Provider value={setUsers}>
        {children}
      </SetUsersContext.Provider>
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);

export const useUsersActions = () => {
  const setUsers = useContext(SetUsersContext);

  const addUser = (newUser) => {
    setUsers((users) => [...users, newUser]);
  };

  const removeUser = (userForRemove) => {
    setUsers((users) => users.filter((user) => user.id !== userForRemove.id));
  };

  return {
    addUser,
    removeUser,
  };
};
