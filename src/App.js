import { UsersProvider } from "./contexts/users";
import { Users } from "./Users";
import { AddUser } from "./AddUser";

const App = () => {
  return (
    <UsersProvider>
      <AddUser />
      <Users />
    </UsersProvider>
  );
};

export default App;
