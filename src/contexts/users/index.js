import { createContext } from "react";
import { useState } from "react";
 
export const UsersContext = createContext();

export const UsersActionsContext = createContext();

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const changeUsers = {
        addUser: (userToAdd) => {
            setUsers([...users, userToAdd]);
        },
        removeUser: (userToRemove) => {
            setUsers(users.filter(user => user != userToRemove));
        }
    }
  
    return (
        <UsersContext.Provider value={users}>
            <UsersActionsContext.Provider value={changeUsers}>
                {children}
            </UsersActionsContext.Provider>
        </UsersContext.Provider>
    );
  };
  