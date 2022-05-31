
//Initial State
const initialState = {
  messages: [],
  isLoading: false,
  error: null,
  isFetching: false
}

// Reducer
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHAT_MESSAGE_SEND':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case 'CHAT_MESSAGE_RECEIVE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case 'CHAT_MESSAGE_RECEIVE_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'CHAT_MESSAGE_RECEIVE_START':
      return {
        ...state,
        isFetching: true
      }
    case 'CHAT_MESSAGE_RECEIVE_END':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}