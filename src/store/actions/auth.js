export const LoginAction = (user) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: user,
  });
};
