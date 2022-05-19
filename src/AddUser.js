import { UsersActionsContext } from "./contexts/users";
import { useContext } from "react";

export const AddUser = () => {
  const { addUser } = useContext(UsersActionsContext);

  const onClick = () => {
    const id = Math.random();
    addUser({
      id,
      title: "bob-" + id,
    })
  };

  return <button onClick={onClick}>add user</button>;
};
