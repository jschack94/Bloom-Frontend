const defaultState = {
  user: null,
  loggedIn: false,
  failedLogin: false,
  error: null,

}

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        
       
      }
    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
      }
    case 'CLOSE_ALERT_ERROR':
      return {
        ...state,
        error: null,
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
        loggedIn: false,
        failedLogin: false,
        error: null,
      }
  
    default:
      return state
  }
}

export default usersReducer