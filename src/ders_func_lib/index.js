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
    alert('sent text to crush');
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
    alert('sent email to crush');
    return true;
  }
  alert('invalid email');
  return false;
}
