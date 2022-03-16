import { useContext } from "react";

import { usersActions, UsersContext, dispatchUsers } from "./contexts/users";

export const Users = () => {
  const users = useContext(UsersContext);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.title}{" "}
            <button
              onClick={() => dispatchUsers(usersActions.removeUser(user))}
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
