import React from 'react';

const ShowPersons = ({ persons, filter, deleteHandler }) => {
    const personList = persons.filter(p => (p.name.toLowerCase().includes(filter.toLowerCase())))
        .map(p => (<tr key={p.id}><td>{p.name}</td><td>{p.number}</td><td><button onClick={deleteHandler(p.id)}>poista</button></td></tr>));
    return (
        <div>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {personList}
                </tbody>
            </table>
        </div>
    )
}

export default ShowPersons