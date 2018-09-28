import React from 'react';
import ShowCountries from './ShowCountries'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            filter: ''
        }
    }
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            this.setState({ countries: response.data })
        })
    }

    filterNames = (event) => {
        this.setState({ filter: event.target.value })
    }

    countryClickHandler = (name) => {
        return () => {this.setState({filter: name})}
    }    

    render() {
        return (
            <div>
                <h2>Country Explorer</h2>
                <div>
                    findCountries:
                    <input onChange={this.filterNames} />
                </div>
                <ShowCountries countries={this.state.countries} filter={this.state.filter} countryClickHandler={this.countryClickHandler}/>
            </div>
        )
    }
}

export default App