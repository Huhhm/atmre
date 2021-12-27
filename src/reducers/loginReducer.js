

const loginReducer = (
  state = {email: '', password: '', user: []},
  action,
) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        email: action.email,
        password: action.password,
        user: action.user,
      };
    default:
      return state;
  }
};

export default loginReducer;
