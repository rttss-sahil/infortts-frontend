
function validateUsername(username) {
  const re = /^[A-Za-z ,.'-]{4,}$/;
  return re.test(username)
}

function validateEmail(email) {
  // eslint-disable-next-line
  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(String(email).toLowerCase());
}

function scorePassword(password) {
  const r1 = /(.{8,})/;
  const r2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/;
  const r3 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const score = r3.test(password) ? 3 : (r2.test(password) ? 2 : (r1.test(password) ? 1 : 0));
  return score
}

const validate = {
  validateEmail,
  scorePassword,
  validateUsername
}

export default validate;