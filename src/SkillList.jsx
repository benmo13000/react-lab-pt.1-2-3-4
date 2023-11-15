import React from 'react'
import SkillListItem from './SkillListItem.jsx'
//import SkillListItem component


export default function SkillList({skills}) {
    const SkillListItems = skills.map((skill, idx) => <SkillListItem index={idx} skill={skill} key={idx}/>)
  return (
    <ul>
        {SkillListItems}
    </ul>
  )
}