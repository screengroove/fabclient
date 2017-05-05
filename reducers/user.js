import { REHYDRATE } from 'redux-persist/constants';

const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
  profile:null,
}

export function user(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.user || [];
    case AUTH_SUCCESS:
      return { token: action.payload };
    case 'IS_AUTHED':
      return {
        ...state,
        isAuthed: true,
        uid: action.payload
      }
    case 'SET_PROFILE':
        return {
          ...state,
          hasProfile: true,
          profile: action.payload
        }
    default:
      return state;
  }
}
