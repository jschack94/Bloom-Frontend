export const signUp = (email_address, password, first_name, last_name) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email_address: email_address,
          password: password,
          first_name: first_name,
          last_name: last_name,
        }
      })
    })
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
    .then(json => {
      localStorage.setItem('jwt', json.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: json.user })
    })
    .catch(r => r.json().then(json => dispatch({ type: 'FAILED_LOGIN', payload: json.errors })))
  }
}

export const logIn = (email_address, password) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email_address: email_address,
          password: password,
        }
      })
    })
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
    .then(json => {
      localStorage.setItem('jwt', json.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: json.user })
    })
    .catch(r => r.json().then(json => dispatch({ type: 'FAILED_LOGIN', payload: json.message })))
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/profile", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then((json) => dispatch(setCurrentUser(json.user)))
  }
}

export const setCurrentUser = userData => ({
  type: 'SET_CURRENT_USER',
  payload: userData,
})

export const failedLogin = errorMsg => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const closeAlertError = () => ({
  type: 'CLOSE_ALERT_ERROR',
})

export const logOut = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({ type: 'LOG_OUT' })
  }
}
