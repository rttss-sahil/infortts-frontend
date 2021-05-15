

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}

function scorePassword(password) {
  const r1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const r2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const r3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let score = 0;
  score += r1.test(password) ? 1 : 0;
  score += r2.test(password) ? 1 : 0;
  score += r3.test(password) ? 1 : 0;
  return score;
}

const validate = {
  validateEmail,
  validatePassword,
  scorePassword
}

export default validate;