import { useState } from 'react';
import PersonList from './PersonList';

function App() {
  const [people, setPeople] = useState([
    {
      name : 'John Doe',
      age : 45,
      hairColor : 'Brown'
    },
    {
      name : 'Jane Doe',
      age : 23,
      hairColor : 'Black'
    },
    {
      name : 'Stewart Little',
      age : 62,
      hairColor : 'Blonde'
    },
    {
      name : 'Little John',
      age : 88,
      hairColor : 'Red'
    }
  ])

  const addAge = (index) => {
    setPeople(people.map((person, i) => {
      if(i === index){
        return { ...person, age : person.age += 1 }
      }
      else{
        return { ...person }
      }
    }))
  }
  
  return (
    <div className="App row">
      <PersonList addAge={addAge} people={people} />
    </div>
  );
}

export default App;
