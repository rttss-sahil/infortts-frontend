

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}

function scorePassword(password) {
  const r1 = /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/;
  const r2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/;
  const r3 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  r1.test(password) && console.log("1");
  r2.test(password) && console.log("2");
  r3.test(password) && console.log("3");
  return r3.test(password) ? 3 : (r2.test(password) ? 2 : (r1.test(password) ? 1 : 0));
}

const validate = {
  validateEmail,
  validatePassword,
  scorePassword
}

export default validate;