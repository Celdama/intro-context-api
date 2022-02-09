import React, { useCallback, useMemo, useState } from 'react';
import { FormContext } from '../form-context';

const FormWithContext = ({ defaultValue, onSubmit, children }) => {
  const [data, setData] = useState(defaultValue);

  const handleChange = useCallback((name, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }, []);

  const value = useMemo(() => {
    return {
      ...data,
      handleChange,
    };
  }, [data, handleChange]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(value);
    },
    [onSubmit, value]
  );

  return (
    <FormContext.Provider value={value}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default FormWithContext;
