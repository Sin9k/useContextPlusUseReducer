import { useContext } from "react";

import { usersActions } from "./contexts/users";

export const AddUser = () => {
  const onClick = () => {
    const id = Math.random();

    usersActions.addUser({
      id,
      title: "bob-" + id,
    });
  };

  return <button onClick={onClick}>add user</button>;
};
