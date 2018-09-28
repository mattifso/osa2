import React from 'react';

const AddPerson = ({newName, newNumber, addNameToList, handleNameChange, handleNumberChange}) => {
    return (
        <form onSubmit={addNameToList}>
            <div>
                <h2>Lisää uusi</h2>
                <div>
                    nimi:
        <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    numero:
        <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </div>
        </form>
    )
}

export default AddPerson