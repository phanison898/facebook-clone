export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    default:
      return state;
  }
};
