import React from 'react';

const FormField = ({ children }) => {
  return (
    <div>
      <label htmlFor='#'>{children}</label>
      <input />
    </div>
  );
};

export default FormField;
