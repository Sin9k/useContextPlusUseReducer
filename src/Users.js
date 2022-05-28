import { useContext } from "react";

import { UsersContext, usersActions } from "./contexts/users";

export const Users = () => {
  const users = useContext(UsersContext);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.title}{" "}
            <button onClick={() => usersActions.removeUser(user)}>
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
