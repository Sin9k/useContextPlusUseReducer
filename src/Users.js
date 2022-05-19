import { useContext } from "react";
import { UsersContext, UsersActionsContext } from "./contexts/users";

export const Users = () => {
  const users = useContext(UsersContext);
  const { removeUser } = useContext(UsersActionsContext);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.title}{" "}
            <button
              onClick={() => removeUser(user)}
            >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
