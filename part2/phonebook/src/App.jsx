import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(newFilter))

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
  const handleFilterInputChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const doesNameAlreadyExist = () => {
    const namesArray = persons.map((p) => p.name)
    return namesArray.includes(newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown: <input value={newFilter} onChange={handleFilterInputChange} /></div>
      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameInputChange} /></div>
        <div>phone: <input value={newPhoneNumber} onChange={handlePhoneNumberInputChange} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {personsToShow.map((person) => {
          return <div key={person.name}>{person.name} {person.phoneNumber && `(📞: ${person.phoneNumber})`}</div>
        })}
    </div>
  )
}

export default App
