export const fetchAllMentors = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1//users")
    .then(res => res.json())
    .then(json => json.filter(user => user.mentor_status === true && user.location.city === 'Chicago' && user.location.state === 'IL'))
    .then(mentors => dispatch(setAllMentors(mentors)))
  }
}

export function setAllMentors(mentors) {
  return {
    type: 'SET_ALL_MENTORS',
    payload: mentors,
  }
}


export const fetchAllConnections = (user_id) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/connections")
    .then(res => res.json())
    .then(json => json.filter(connection => connection.mentee.id === user_id))
    .then(connections => {
      dispatch(setAllConnections(connections))
    })
  }
}

export function setAllConnections(connections) {
  return {
    type: 'SET_ALL_CONNECTIONS',
    payload: connections,
  }
}