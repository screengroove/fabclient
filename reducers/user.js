const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
  profile:'PROFILE',
}

export function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { token: action.payload };
    case 'IS_AUTHED':
      return {
        ...state,
        isAuthed: true
      }
    default:
      return state;
  }
}
