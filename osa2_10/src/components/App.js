import React from 'react';
import AddPerson from './AddPerson'
import ShowPersons from './ShowPersons';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { id: 1, name: 'Arto Hellas', number: '555-12345' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }
    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }
    filterNames = (event) => {
        this.setState({ filter: event.target.value })
    }
    addNameToList = (event) => {
        event.preventDefault()
        const matchingName = this.state.persons.find(x => (x.name === this.state.newName))
        if (matchingName) {
            alert('Nimi "' + this.state.newName + '" on jo talletettu')
            return
        }
        const newPersons = this.state.persons.concat({ id: Math.random(), name: this.state.newName, number: this.state.newNumber })
        this.setState({ persons: newPersons })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <div>
                    rajaa näytettäviä:
                    <input onChange={this.filterNames} />
                </div>
                <AddPerson addNameToList={this.addNameToList} handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange} />
                <ShowPersons persons={this.state.persons} filter={this.state.filter} />
            </div>
        )
    }
}

export default App