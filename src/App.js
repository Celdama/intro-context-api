import './App.css';
import { useCallback } from 'react';
import FormWithContext from './Components/FormWithContext';
import FormField from './Components/FormField';
import PrimaryButton from './Components/PrimaryButton';

function App() {
  const handleSubmit = useCallback((value) => {
    console.log(value);
  }, []);

  return (
    <div className='App'>
      <h1>FormContext</h1>

      <FormWithContext
        defaultValue={{ name: 'Doe', firstname: 'John' }}
        onSubmit={handleSubmit}
      >
        <FormField name='firstname'>Prénom</FormField>
        <FormField name='name'>Nom</FormField>
        <PrimaryButton>Envoyer</PrimaryButton>
      </FormWithContext>
    </div>
  );
}

export default App;

// creer formContext
// - creer FormField (name)
// - creer FormField (firstname)
// - creer Primary Button (envoyer le formulaire)
