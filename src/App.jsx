import React, { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './App.css';

const initialSkills = [{
  name: "Javascropt",
  level: 3
}];

function App() {
  const [skills, setSkills] = useState(initialSkills);
//const newSkills = skills + skill
  function addSkill(skill){
    const newSkills = [...skills, skill]
    setSkills(newSkills)
}
  return (
    <>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />
      <hr />
    </>
  );
}

export default App;
