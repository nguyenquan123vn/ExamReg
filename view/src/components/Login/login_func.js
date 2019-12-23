import axios from 'axios';
export const login = user => {
    return axios
      .post('user/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
  