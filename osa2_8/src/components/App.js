import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { id: 1, name: 'Arto Hellas', number: '555-12345' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    render() {
        const numerot = this.state.persons.map(p => (<tr key={p.id}><td>{p.name}</td><td>{p.number}</td></tr>))
        const addName = (event) => {
            event.preventDefault()
            const matchingName = this.state.persons.find(x => (x.name === this.state.newName))
            if (matchingName) {
                alert('Nimi "' + this.state.newName + '" on jo talletettu')
                return
            }
            const newPersons = this.state.persons.concat({ id: Math.random(), name: this.state.newName, number: this.state.newNumber })
            this.setState({ persons: newPersons })
        }
        const handleNameChange = (event) => {
            this.setState({ newName: event.target.value })
        }
        const handleNumberChange = (event) => {
            this.setState({ newNumber: event.target.value })
        }
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={addName}>
                    <div>
                        nimi:
                        <input
                            value={this.state.newName}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div>
                        numero:
                        <input
                            value={this.state.newNumber}
                            onChange={handleNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                        {numerot}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App