import React from 'react'

export default function Child({person,onDelete}) {
  
    return (
        <div>
            <h3>Name of the first person is {person.name}</h3>
            <h3>{person.name}, your age is {person.age}</h3>
            <h3>your location is {person.location}</h3>
            <button className="btn btn-sm btn-danger" onClick ={onDelete}>delete</button>
        </div>
    )
}
