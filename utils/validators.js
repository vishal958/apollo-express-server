module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username cannot be empty';
  }
  if (email.trim() === '') {
    errors.email = 'Email cannot be empty';
  }
  if (password === '') {
    errors.password = 'Password cannot be empty';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Password did not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === '') {
    errors.username = 'Username cannot be empty';
  }
  if (password === '') {
    errors.password = 'Password cannot be empty';
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
