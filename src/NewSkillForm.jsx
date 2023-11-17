import React from 'react'
import { useState } from 'react'

export default function NewSkillForm({addSkill}) {
    const [skillData, setSkillData] = useState({
        name: "",
        level: 3
    });
    function handleChange(evt) {
        const newSkillData = { ...skillData, [evt.target.name]: evt.target.value};
        setSkillData(newSkillData);
    }
    function handleAddSkill(evt){
        evt.preventDefault()
        addSkill(skillData)
        // setSkillData(defaultSkillData)
    }

  return (
    <>
    <form onSubmit={handleAddSkill}>
    <label htmlFor='skill'>Skill</label>
    <input type="text" name='name' onChange={handleChange} value={skillData.name}/>

    <label htmlFor='level'>Level</label>
    <select name="level" id="level" onChange={handleChange} value={skillData.level}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        </select>
        <button onClick={handleAddSkill}>ADD Skill</button>
    </form>
    </>
  )
}
