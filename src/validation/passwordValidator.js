export const validator = (value, setError, setIsValid, errorMessage) => {
  if (value.trim().length === 0) {
    setIsValid(false);
    return setError(errorMessage);
  }
  setIsValid(true);
  setError('');
};
