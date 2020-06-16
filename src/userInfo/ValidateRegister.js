export default function validateRegister(registerForm) {
  let errors = {};
  if (!registerForm.fname) {
    errors.fname = 'First name is required';
  }
  if (!registerForm.lname) {
    errors.lname = 'Last name is required';
  }
  if (!registerForm.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!registerForm.password) {
    errors.password = 'Password is required';
  } else if (registerForm.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  
  return errors
};