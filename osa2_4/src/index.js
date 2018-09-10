import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko otsikkoTeksti={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa kurssi={kurssi} />
    </div>)
}

const Otsikko = ({otsikkoTeksti}) => {
  return (
    <h1>{otsikkoTeksti}</h1>
  )
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

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  const kurssiItems = kurssit.map(k => (<Kurssi key={k.id} kurssi={k} />))
  return (
    <div>
      <Otsikko otsikkoTeksti='Opetusohjelma'/>
      {kurssiItems}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)