import {useEffect, useState} from 'react';

function useInput(initialValue, isOpen) {
  const [value, setValue] = useState(initialValue);
  const isIncorrectInput = initialValue === '' ? false : true;
  const [isCorrect, setIsCorrect] = useState(isIncorrectInput);
  const [error, setError] = useState('');
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(!isIncorrectInput);

  function handleChange(event) {
    if (typeof event === 'object') {
      const input = event.target;
      handleError(input);
      setValue(input.value);
    } else {
      setValue(event);
    }
  }

  function handleError(input) {
    setIsCorrect(input.validity.valid);
    setError(input.validationMessage)
  }

  useEffect(() => {
    if (!isOpen) {
      setError('');
      setIsCorrect(isIncorrectInput);
      setValue(initialValue)
    }
  }, [isOpen,isIncorrectInput, initialValue])

  useEffect(() => {
    isCorrect ? setDisabledSubmitButton(false) : setDisabledSubmitButton(true);
  }, [isCorrect]);

  return {
    value,
    handleChange,
    handleError,
    isCorrect,
    error,
    disabledSubmitButton
  }
}

export default useInput