import React, {useState} from "react";
import InputForm from "./InputForm";

const PersonForm = ({onSubmit, newName, newNumber, onNewNameChange, onNewNumberChange}) => {


    const handleNameChange = (event) => {
        onNewNameChange(event.target.value)
    }

    const handleNumberChange = (event) => {
        onNewNumberChange(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm title={"name"} value={newName} onChange={handleNameChange}/>
            <InputForm title={"phone"} value={newNumber} onChange={handleNumberChange}/>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}


export default PersonForm