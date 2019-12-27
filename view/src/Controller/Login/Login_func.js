import axios from 'axios';

export const login = user => {
    return axios
      .post('http://localhost:3001/user/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if(response.status == 200){
          //console.log(response.data.isAdmin);
          localStorage.setItem('usertoken', response.data)
          return response.data
        }
        else
        {
          console.log(response.data);
          return response.data;
        }
      })
      .catch(err => {
        console.log(err)
      })
}
