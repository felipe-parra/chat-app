// Initial state data
const initialState = {
  isAuthenticated: false,
  user: {},
  token: '',
  isLoading: false,
  error: null
}

// Reducer
export default function authReducer (state = initialState, action){
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true
      }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      }
    default:
      return state
  }
}