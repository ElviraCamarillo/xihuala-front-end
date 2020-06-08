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


const api = {
  login,
  newUser
}

export default api