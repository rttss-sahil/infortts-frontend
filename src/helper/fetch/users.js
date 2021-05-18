import configs from './configs';

const fetchLogin = async (email, password) => {
  let user = await fetch((configs.BACKEND_URL + 'users/login'), {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }).then(data => data.json().then(data => data))
    .catch(err => {
      return ({ message: 'error Occurred' })
    })
  return user
}

const fetchRegister = async (username, email, password) => {
  let user = await fetch((configs.BACKEND_URL + 'users/register'), {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
  }).then(data => data.json().then(data => data))
    .catch(err => {
      return ({ message: 'error Occurred' })
    })
  return user
}


const Fetch = {
  fetchLogin,
  fetchRegister,
}
export default Fetch;