const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login Failed' };
    case 'LOGIN_SUCCESS':
      return { ...state, authError: null };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNOUT_ERROR':
      return { ...state, authError: 'Signout Failed' };
    default:
      return state;
  }
}

export default authReducer;