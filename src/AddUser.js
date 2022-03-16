import { usersActions, dispatchUsers } from "./contexts/users";

export const AddUser = () => {
  const onClick = () => {
    const id = Math.random();

    dispatchUsers(
      usersActions.addUser({
        id,
        title: "bob-" + id,
      })
    );
  };

  return <button onClick={onClick}>add user</button>;
};
