export const addUser = (user) => {
  return {
    type: "ADD_USER",
    user,
  };
};

export const removeUser = (user) => {
  return {
    type: "REMOVE_USER",
    user,
  };
};
