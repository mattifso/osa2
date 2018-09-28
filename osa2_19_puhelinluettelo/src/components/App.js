import React from 'react';
import AddPerson from './AddPerson'
import ShowPersons from './ShowPersons'
import personService from './persons'
import Notification from './Notification'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null,
            persons: [
                { id: 1, name: 'Arto Hellas', number: '555-12345' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
        }
    }
    componentDidMount() {
        personService.getAll().then(personsFromServer => {
            this.setState({ persons: personsFromServer })
        })
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
    showMessage = (message) => {
        this.setState({ message: message })
        setTimeout(() => {
            this.setState({ message: null })
        }, 5000)
    }

    addNameToList = (event) => {
        event.preventDefault()
        const matchingName = this.state.persons.find(x => (x.name.toLowerCase() === this.state.newName.toLowerCase()))
        if (matchingName) {
            if (window.confirm('Nimi "' + matchingName.name + '" on jo luettelossa, korvataanko numero uudella?')) {
                matchingName.number = this.state.newNumber
                personService.update(matchingName.id, matchingName)
                    .then((result) => {
                        this.setState({ persons: this.state.persons.map(person => person.id === matchingName.id ? matchingName : person) })
                        this.showMessage(`Päivitettiin numero henkilölle ${matchingName.name}`)        
                    }).catch((error) => {
                        // jos henkilöä ei enää ole, lisätään uudestaan
                        personService.create(matchingName).then(newPersonFromServer => {
                            this.setState({ persons: this.state.persons.filter(person => person.id !== matchingName.id).concat(newPersonFromServer) })
                            this.showMessage(`Henkilö ${matchingName.name} oli poistettu, luotiin uudestaan`)
                        })
                    })
            }
            return
        }
        let newPerson = { name: this.state.newName, number: this.state.newNumber }
        personService.create(newPerson).then(newPersonFromServer => {
            const newPersons = this.state.persons.concat(newPersonFromServer)
            this.setState({ persons: newPersons })
            this.showMessage(`Lisättiin henkilö ${newPerson.name}`)
        })
    }
    deletePerson = (id) => {
        return (event) => {
            personService.remove(id).then(result => {
                const removedPerson = this.state.persons.find(person => person.id === id)
                this.setState({ persons: this.state.persons.filter(person => person.id !== id) })
                this.showMessage(`Poistettiin henkilö ${removedPerson.name}`)
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Notification message={this.state.message} />
                <div>
                    rajaa näytettäviä:
                    <input onChange={this.filterNames} />
                </div>
                <AddPerson addNameToList={this.addNameToList} handleNameChange={this.handleNameChange} handleNumberChange={this.handleNumberChange} />
                <ShowPersons persons={this.state.persons} filter={this.state.filter} deleteHandler={this.deletePerson} />
            </div>
        )
    }
}

export default App