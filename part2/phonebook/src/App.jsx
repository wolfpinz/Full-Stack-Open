import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (doesNameAlreadyExist()) {
      window.alert("Computer sagt 'nein'")
      return
    }
    const newPersonObj = {
      name: newName
    }
    setPersons(persons.concat(newPersonObj))
    setNewName('')
  }
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const doesNameAlreadyExist = () => {
    const namesArray = persons.map((p) => p.name)
    return namesArray.includes(newName)
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
        {persons.map((person) => {
          return <div key={person.name}>{person.name}</div>
        })}
    </div>
  )
}

export default App
