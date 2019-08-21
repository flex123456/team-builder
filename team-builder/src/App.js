import React from 'react';
import './App.css';
import {useState} from 'react';
import data from './Components/data';
import Form from './Components/form';
import Members from './Components/members';

function App() {
  const [members, setMembers] = useState(data)
  const addNewMember = member => {
    setMembers([...members, member]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Team Members</h1>
        <Form addNewMember={addNewMember}/>
        <Members data={data}/>

      </header>
    </div>
  );
}

export default App;
