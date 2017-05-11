

const initialState = {
  loader:true,
}

export function ui(state = initialState, action) {
    switch (action.type) {
      case 'LOADER_ON':
          return {
            ...state,
            loader: true
          };
      case 'LOADER_OFF':
          return {
            ...state,
            loader: false 
          };
      default:
        return state;
    }
}
