import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    const newPersonObj = {
      name: newName
    }
    setPersons(persons.concat(newPersonObj))
    setNewName('')
  }
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{newName}</div>
        {persons.map((person) => {
          return <div key={person.name}>{person.name}</div>
        })}
    </div>
  )
}

export default App
