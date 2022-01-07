import React, {useState,useEffect} from 'react'
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import InputForm from "./InputForm";
import axios from "axios";
import phoneService from "./services/phones";

const App = () => {
  const [persons, setPersons] = useState([]  )

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        phoneService
            .getAll()
            .then(phones => {
                setPersons(phones)
            })
    }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.filter(e => e.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
      phoneService
          .create(personObject)
          .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('')
              setNewNumber('')
          })
  }

    const deletePerson = (id) => {
        const filteredPerson = persons.filter(person => person.id === id)
        const personName = filteredPerson[0].name
        const personId = filteredPerson[0].id
        if (window.confirm(`Delete ${personName} ?`)) {
            phoneService
                .destroy(personId)
            console.log(`${personName} successfully deleted`)
            setPersons(persons.filter(person => person.id !== personId))
        }
    }

  return (
      <div>
        <h2>Phonebook</h2>

        <InputForm title="filter shown with" value={filter} onChange={handleFilterChange}/>

        <h3>add a new</h3>

        <PersonForm onSubmit={addPerson} newName={newName} newNumber={newNumber} onNewNameChange={setNewName}
                    onNewNumberChange={setNewNumber}/>

        <h2>Numbers</h2>
        <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
      </div>
  )
}

export default App