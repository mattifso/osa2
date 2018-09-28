import React from 'react'

const Otsikko = ({ otsikkoTeksti }) => {
    return (
        <h1>{otsikkoTeksti}</h1>
    )
}

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <Otsikko otsikkoTeksti={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa kurssi={kurssi} />
        </div>)
}

const Sisalto = ({ osat }) => {
    const osaTiedot = osat.map(o => (<Osa key={o.id} osa={o.nimi} tehtavia={o.tehtavia} />))
    return (<div>{osaTiedot}</div>)
}

const Osa = (props) => {
    return (
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Yhteensa = ({ kurssi }) => {
    const sum = kurssi.osat.reduce((sum, current) => (sum + current.tehtavia), 0);
    return (<p>yhteensä {sum} tehtävää</p>)
}

export default Kurssi