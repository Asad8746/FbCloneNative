export const emailValidator = (value, setError, setIsValid) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (value.trim() === '') {
    setIsValid(false);
    return setError('Email is Required');
  } else if (!regex.test(value)) {
    setIsValid(false);
    return setError('Please Enter a Valid Email');
  }
  setIsValid(true);
  return setError('');
};
