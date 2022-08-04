import { useUsers, useUsersActions } from "./contexts/users";

export const Users = () => {
  const users = useUsers();
  const { removeUser } = useUsersActions();

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.title}{" "}
            <button onClick={() => removeUser(user)}>remove</button>
          </li>
        );
      })}
    </ul>
  );
};
