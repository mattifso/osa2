import React from 'react';

const ShowCountries = ({ countries, filter, countryClickHandler }) => {
    const countryList = countries.filter(p => (p.name.toLowerCase().includes(filter.toLowerCase())))
        .map(p => (
            <div key={p.alpha2Code}>
                <p onClick={countryClickHandler(p.name)}> {p.name} </p>
                <p> capital: {p.capital} </p>
                <p> population: {p.population} </p>
                <img width='640px' src={p.flag} alt ='flag'/>
            </div>))
    const textBody = countryList.length > 10 ? <p>too many matches, specify another filter</p> : countryList
    return (
        <div>
            <h2>Maat</h2>
            {textBody}
        </div>
    )
}

export default ShowCountries