// Fetches variables from instagram in the redirected url (e.g. code)
export function getUrlVars() {
  const vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
}

export function isValidPhoneNumber(phoneNumber) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if ((phoneNumber.match(phoneno))) {
    return true;
  } if (phoneNumber.replace(/\D/g, '').length !== 10) {
    alert('Your phone number must have 10 digits.');
  } else {
    alert('invalid phone number');
  }
  return false;
}

export function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  }
  alert('invalid email');
  return false;
}
