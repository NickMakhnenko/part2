import React from 'react'

const Persons = ({persons, filter, deletePerson}) => (
    <ul>
        {
            persons
                .filter(p => filter ? p.name.toLowerCase().startsWith(filter.toLowerCase()) : true)
                .map(person => <li key={person.id}>{person.name} {person.number}
                <button onClick={() => deletePerson(person.id)}>delete</button>
                </li>)}
    </ul>
)

export default Persons