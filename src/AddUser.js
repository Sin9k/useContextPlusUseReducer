import { useUsersActions } from "./contexts/users";

export const AddUser = () => {
  const { addUser } = useUsersActions();

  const onClick = () => {
    const id = Math.random();

    addUser({
      id,
      title: "bob-" + id,
    });
  };

  return <button onClick={onClick}>add user</button>;
};
