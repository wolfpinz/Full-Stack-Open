import { useEffect, useState } from 'react'
import axios from 'axios'

import PersonForm from './personForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(newFilter))

  // API
  const baseURL = 'http://localhost:3001/persons'
  // GET ALL INITIAL
  useEffect(() => {
    axios
      .get(baseURL)
      .then(response => {
        setPersons(response.data)
      })
  },[])
  // CREATE
  const addPerson = (event) => {
    event.preventDefault()
    if (doesNameAlreadyExist()) {
      window.alert("Computer sagt 'nein'")
      return
    }
    const newPersonObj = {
      name: newName,
      number: newNumber
    }
    axios
      .post(baseURL, newPersonObj)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }
  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }
  const doesNameAlreadyExist = () => {
    const namesArray = persons.map((p) => p.name)
    return namesArray.includes(newName)
  }
  const handleFilterInputChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown: <input value={newFilter} onChange={handleFilterInputChange} /></div>
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        onNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        onNumberInputChange={handleNumberInputChange}
      />
      <h2>Numbers</h2>
        {personsToShow.map((person) => {
          return <div key={person.name}>{person.name} {person.number && `(📞: ${person.number})`}</div>
        })}
    </div>
  )
}

export default App
