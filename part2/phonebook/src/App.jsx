import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '1234567789' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (doesNameAlreadyExist()) {
      window.alert("Computer sagt 'nein'")
      return
    }
    const newPersonObj = {
      name: newName,
      phoneNumber: newPhoneNumber
    }
    setPersons(persons.concat(newPersonObj))
    setNewName('')
    setNewPhoneNumber('')
  }
  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneNumberInputChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const doesNameAlreadyExist = () => {
    const namesArray = persons.map((p) => p.name)
    return namesArray.includes(newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameInputChange} /></div>
        <div>phone: <input value={newPhoneNumber} onChange={handlePhoneNumberInputChange} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) => {
          return <div key={person.name}>{person.name} {person.phoneNumber && `(📞: ${person.phoneNumber})`}</div>
        })}
    </div>
  )
}

export default App
