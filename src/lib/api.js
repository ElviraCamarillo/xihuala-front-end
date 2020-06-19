const API_URL = 'http://xihuala-app-api.mybluemix.net'
//const API_URL = 'http://localhost:8080'


async function login (email, password) {
    try {
      const response = await window.fetch(`${API_URL}/auth/login`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const payload = await response.json()
      if (payload.success === false) {
        return payload
      } else {
        window.sessionStorage.setItem(
          'authorization', payload.data.token
        )
        return payload
      }
    } catch (error) {
      return {
        message: error,
        data: {
          token: ''
        }
      }
    }
  }
async function newUser (dataNewUSer) {
  try {
    const response = await window.fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...dataNewUSer })
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        newPost: ''
      }
    }
  }
}
  async function updateAUser (token,id_user,dataUSer) {
    try {
      const response = await window.fetch(`${API_URL}/users/${id_user}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: token
        },
        body: JSON.stringify({ ...dataUSer })
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      return {
        data: {
          userUpdated: ''
        }
      }
    }
  }
  async function getUserSession (token) {
    try {
      const response = await window.fetch(`${API_URL}/users/getsession`, {
        headers: { authorization: token }
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      return {
        data: {
          session: []
        }
    }
  }
}
async function getEventsByUserId (token, id_user) {
  try {
    const response = await window.fetch(`${API_URL}/events/user/${id_user}`, {
      headers: { authorization: token }
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        session: []
      }
    }
  }
}
async function newEvent (dataNewEvent,token) {
  try {
    const response = await window.fetch(`${API_URL}/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({ ...dataNewEvent })
    })
    const payload = await response.json()
    if (payload.success === false) {
      return payload
    } else {
      window.sessionStorage.setItem(
        'authorization', payload.data.token
      )
      return payload
    }
  } catch (error) {
    return {
      data: {
        newEvent: ''
      }
    }
  }
}
async function getEvent (id_event) {
  try {
    const response = await window.fetch(`${API_URL}/events/${id_event}`)
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        event: []
      }
    }
  }
}
async function getEventGuests (id_event) {
  try {
    const response = await window.fetch(`${API_URL}/events/${id_event}`)
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        event: []
      }
    }
  }
}
async function addGuestEvent (id_event, dataNewEvent ) {
  try {
    const response = await window.fetch(`${API_URL}/events/${id_event}/addguest`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataNewEvent)
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        event: []
      }
    }
  }
}
async function confirmGuestEvent (id_event, dataNewEvent ) {
  try {
    const response = await window.fetch(`${API_URL}/events/${id_event}/confirmguest`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataNewEvent)
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        event: []
      }
    }
  }
}

async function deleteExpense (id_event, dataExpense ) {
  try {
    const response = await window.fetch(`${API_URL}/events/${id_event}/deleteExpense`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataExpense)
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        expense: []
      }
    }
  }
}

async function updateProfile (token, idUser, userUpdated) {
  try {
    const response = await window.fetch(`${API_URL}/users/${idUser}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(userUpdated)
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        user: ''
      }
    }
  }
}
async function newExpense (id_event, dataNewExpense ) {
  try {
   
    const response = await window.fetch(`${API_URL}/events/${id_event}/addexpense`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataNewExpense)
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    
    return {
      data: {
        event: []
      }
    }
  }
}

async function validateEmail (hash) {
  try {
    const response = await window.fetch(`${API_URL}/users/confirmation/${hash}`)
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        session: []
      }
    }
  }
}


async function getUsers (token) {
  try {
    const response = await window.fetch(`${API_URL}/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        users: []
      }
    }
  }
}

async function getAllEvents (token) {
  try {
    const response = await window.fetch(`${API_URL}/events/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
    })
    const payload = await response.json()
    return payload
  } catch (error) {
    return {
      data: {
        events: []

      }
    }
  }
}

const api = {
  login,
  newUser,
  getUserSession,
  getEventsByUserId,
  getEvent,
  getEventGuests,
  addGuestEvent,
  newEvent,
  updateAUser,
  confirmGuestEvent,
  updateProfile,
  newExpense,
  deleteExpense,
  validateEmail,
  getUsers,
  getAllEvents

}
export default api