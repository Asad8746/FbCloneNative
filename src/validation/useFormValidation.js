import {useState, useEffect, useMemo} from 'react';

export default (initialValue, validator = null, errorMessage = '') => {
  const [state, setState] = useState(initialValue);
  const [blur, setBlur] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (blur && validator) {
      validator(state, setError, setIsValid, errorMessage);
    }
  }, [blur, state]);
  return {
    state,
    blur,
    setState,
    setBlur,
    error,
    isValid,
  };
};
