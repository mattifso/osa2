import React from 'react'
import ReactDOM from 'react-dom'


const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osa1={kurssi.osat[0].nimi} tehtavia1={kurssi.osat[0].tehtavia} osa2={kurssi.osat[1].nimi} tehtavia2={kurssi.osat[1].tehtavia} osa3={kurssi.osat[2].nimi} tehtavia3={kurssi.osat[2].tehtavia} />
    </div>)
}


const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
      <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
      <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa} {props.tehtavia}</p>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)