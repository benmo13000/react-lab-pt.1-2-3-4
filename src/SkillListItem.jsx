import React from 'react'
import './SkillListItem.css'
import SkillList from './SkillList'

export default function SkillListItem({ skill, index }) {
  return (
    <li
        className='SkillListItem'
        style={ {backgroundColor: index % 2 ? 'lavender' : 'plum'}}
    >
        {skill.name} {skill.level}
    </li>
  )
}





//sorry