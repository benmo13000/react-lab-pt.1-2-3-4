import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'
import './App.css'

const skills = [
  'Javascript',
  'Python',
  'Everything else'
]

function App() {

  return (
    <>
    <h1>React Dev Skills</h1>
     <SkillList skills={skills} />
     <hr></hr>
     {/* Add NewSkillForm component */}
     <hr />
     <NewSkillForm />
    </>
  )
}


export default App
