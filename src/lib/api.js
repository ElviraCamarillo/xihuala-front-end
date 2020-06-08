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

const api = {
  login
}

export default api