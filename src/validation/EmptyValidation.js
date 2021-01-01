export default (value, setError, setIsValid, errorMessage) => {
  if (value === "") {
    setIsValid(false);
    return setError(errorMessage);
  }
  setIsValid(true);
  return setError("");
};
