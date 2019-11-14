import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from "./components/Form"
import Team from "./components/Team"
function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name:"Doni",
      email:"emene@maie.com",
      role:"developer"
    }
  ]);
  const addNewTeamMember = team =>{
    const newTeamMember = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeamMember([...teamMember, newTeamMember])
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TeamForm addNewTeamMember={addNewTeamMember}/>
        <Team teamMember={teamMember}/>
      </header>
    </div>
  );
}

export default App;
