const API_URL = 'http://xihuala-app-api.mybluemix.net'

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
      console.log(payload)
      if (payload.success === false) {
        return payload
      } else {
        window.sessionStorage.setItem(
          'authorization', payload.data.token
        )
        return payload
      }
    } catch (error) {
      console.log('error hand', error)
      return {
        message: 'Error login API',
        data: {
          token: ''
        }
      }
    }
  }

  async function newUser (dataNewUSer) {
    try {
      console.log(dataNewUSer)
      const response = await window.fetch(`${API_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...dataNewUSer })
      })
      console.log(response)
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('Error al crear nuevo usuario')
      console.log(error)
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
      console.log(response)
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('Error al modificar usuario')
      console.log(error)
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
      console.log('error', error)
      return {
        data: {
          session: []
        }
      }
    }
  }

  async function getEventsByUserId (token, id_user) {
    try {
      console.log(id_user)
      const response = await window.fetch(`${API_URL}/events/user/${id_user}`, {
        headers: { authorization: token }
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('error', error)
      return {
        data: {
          session: []
        }
      }
    }
  }
  async function getEvent (token, id_event) {
    try {
      console.log(id_event)
      const response = await window.fetch(`${API_URL}/events/${id_event}`, {
        headers: { authorization: token }
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('error', error)
      return {
        data: {
          event: []
        }
      }
    }
  }
  async function getEventGuests (token, id_event) {
    try {
      console.log(id_event)
      const response = await window.fetch(`${API_URL}/events/${id_event}`, {
        headers: { authorization: token }
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('error', error)
      return {
        data: {
          event: []
        }
      }
    }
  }

  async function addGuestEvent (token, id_event) {
    try {
      console.log(id_event)
      const response = await window.fetch(`${API_URL}/events/${id_event}/addguest`, {
        headers: { authorization: token }
      })
      const payload = await response.json()
      return payload
    } catch (error) {
      console.log('error', error)
      return {
        data: {
          event: []
        }
      }
    }
  }

  async function newEvent (token, dataNewEvent) {
    try {
      console.log(dataNewEvent)
      const response = await window.fetch(`${API_URL}/events/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token
        },
        body: JSON.stringify({ ...dataNewEvent })
      })
      console.log(response)
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
      console.log('Error al crear nuevo evento')
      console.log(error)
      return {
        data: {
          newEvent: ''
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
  updateAUser
}

export default api