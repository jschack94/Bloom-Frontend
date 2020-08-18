export const fetchAllMentors = () => {
  return (dispatch) => {
    fetch("https://bloom-rails.herokuapp.com/api/v1/users")
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

export const requestMentorship = (mentee_id, mentor_id) => {
  return (dispatch) => {
    fetch("https://bloom-rails.herokuapp.com/api/v1/connections", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        connection: {
          mentee_id: mentee_id,
          mentor_id: mentor_id,
          accepted: false,
        }
      })
    })
  }
}



export const fetchAllConnections = (user_id) => {
  return (dispatch) => {
    fetch("https://bloom-rails.herokuapp.com/api/v1/connections")
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
