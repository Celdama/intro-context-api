import React, { useCallback, useContext } from 'react';
import { FormContext } from '../form-context';

const FormField = ({ name, children }) => {
  const data = useContext(FormContext);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      data.handleChange(name, value);
    },
    [data]
  );

  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        type='text'
        name={name}
        id={name}
        onChange={handleChange}
        value={data[name] || ''}
      />
    </div>
  );
};

export default FormField;
