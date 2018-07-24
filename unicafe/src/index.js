import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Otsikko = ({teksti}) => {
  return (
    <div>
      <h1> {teksti} </h1>
    </div>
  )
}

const Button = ({handleClick,teksti}) => {
  return(
    <div>
      <button onClick= {handleClick} >
        {teksti}
      </button>
    </div>
  )
}

const Statistic = ({teksti,maara}) => {
  return (
    <tr>
      <td>
        {teksti}
      </td>
      <td>
       {maara}
      </td>
    </tr>
  )
}

const Statistics = ({hyvat,neutraalit,huonot}) => {

  const yhteensa = hyvat + neutraalit + huonot

  if (yhteensa !== 0) {

    let keskiarvo = (hyvat + huonot * -1) / (yhteensa)
    keskiarvo = keskiarvo.toFixed(1)

    let prosenttia = hyvat / (yhteensa) * 100
    prosenttia = prosenttia.toFixed(1) + ' %'

    return (
      <table>
        <tbody>
          <Statistic
            teksti = 'hyvä'
            maara = {hyvat}
            />
          <Statistic
            teksti = 'neutraali'
            maara = {neutraalit}
          />
          <Statistic
            teksti = 'huono'
            maara = {huonot}
            />
          <Statistic
            teksti = 'keskiarvo'
            maara = {keskiarvo}
          />
          <Statistic
            teksti = 'positiivisia'
            maara = {prosenttia}
          />
        </tbody>
      </table>
    )
  }

  else {
    return (
      <div>
        <p>
          ei yhtään palautetta annettu
        </p>
      </div>
    )
  }
}

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0
    }
  }

  lisaaYksi = (kohde) => () => this.setState({[kohde]: this.state[kohde] + 1})

  render () {

    return (
      <div>
        <Otsikko teksti = 'anna palautetta' />
        <Button
          handleClick = {this.lisaaYksi('hyvat')}
          teksti = 'hyvä'
        />
        <Button
          handleClick = {this.lisaaYksi('neutraalit')}
          teksti = 'neutraali'
        />
        <Button
          handleClick = {this.lisaaYksi('huonot')}
          teksti = 'huono'
        />
        <Otsikko teksti = 'statistiikka' />
        <Statistics
          hyvat = {this.state.hyvat}
          neutraalit = {this.state.neutraalit}
          huonot = {this.state.huonot}
        />
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
