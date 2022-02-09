import React from 'react';
import FormField from './FormField';
import PrimaryButton from './PrimaryButton';

const FormContext = () => {
  return (
    <div>
      <h1>FormContext</h1>
      <FormField>Nom</FormField>
      <FormField>Prénom</FormField>
      <PrimaryButton />
    </div>
  );
};

export default FormContext;
