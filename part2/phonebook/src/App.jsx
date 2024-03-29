import { useEffect, useState } from 'react'
import personService from './services/persons'

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

  // GET ALL INITIAL
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  },[])
  // CREATE
  const addPerson = (event) => {
    event.preventDefault()
    // if name exists: update, otherwise create
    if (doesNameAlreadyExist()) {
      const person = persons.find(p => p.name === newName)
      if (window.confirm(`${person.name} is already a contact.
      Do you want to replace the old number with the new one?`)) {
        const updatedPerson = {...person, number: newNumber}
        personService
          .update(person.id, updatedPerson)
          .then(res => {
            const returnedPerson = res.data
            console.log(returnedPerson)
            setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
          })
      }
    } else {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
    }
    setNewName('')
    setNewNumber('')
  }

  // DELETE
  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(setPersons(persons.filter(p => p.id != person.id)))
    }
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
          return (
            <div key={person.name}>
              <span>{person.name} {person.number && `(📞: ${person.number})`} </span>
              <button onClick={() => deletePerson(person)} >delete</button>
            </div>)
        })}
    </div>
  )
}

export default App
