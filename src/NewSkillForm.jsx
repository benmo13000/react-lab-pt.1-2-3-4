import React from 'react'

export default function NewSkillForm() {
  return (
    <>
    <form>
    <label htmlFor='skill'>Skill</label>
    <input type="text" name='level'/>

    <label htmlFor='level'>Level</label>
    <select name="level" id="level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        </select>
        <button>ADD Skill</button>
    </form>
    </>
  )
}
