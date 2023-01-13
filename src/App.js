import { useState, useEffect } from 'react';
import { getPeople } from './api/people';
import './App.css';



function App() {
  const [people, setPeople] = useState([]);
  const [errorState, setErrorState] = useState({hasError: false});

  useEffect (() => {
    getPeople()
      .then((data) => setPeople(data.results))
      .catch(handleError);
  }, []);

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message});
  }
  const showDetails = (character) => {
    const id = //20:04... finish homework
  }

  return (
    <ul>
      {errorState.hasError && <div>{errorState.message}</div>}
      {people.map((character) => (
        <li key={character.name} onClick={() => showDetails(character)}>{character.name}</li>
      ))}
      
    </ul>
  );
}

export default App;
