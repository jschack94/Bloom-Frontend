const initialState = {
  allMentors: null,
  allConnections: null,
}

export default function browseReducer(state = initialState, action) {

  switch(action.type) {
    case 'SET_ALL_MENTORS':
      return { ...state, allMentors: action.payload }
    case 'SET_ALL_CONNECTIONS':
      return { ...state, allConnections: action.payload }
    default:
      return state
  }
}