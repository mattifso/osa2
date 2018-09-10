import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { id: 1, name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    render() {
        const numerot = this.state.persons.map(p => (<li key={p.id}>{p.name}</li>))
        const addName = (event) => {
            event.preventDefault()
            const matchingName = this.state.persons.find(x=>(x.name === this.state.newName))
            if (matchingName) {
                alert('Nimi "' + this.state.newName + '" on jo talletettu')
                return
            }
            const newPersons = this.state.persons.concat({ id: Math.random(), name: this.state.newName  })
            this.setState({persons: newPersons})
        }
        const handleNameChange = (event) => {
            this.setState({ newName: event.target.value })
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
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {numerot}
                </ul>
            </div>
        )
    }
}

export default App