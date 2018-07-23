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

const Nappi = ({handleClick,teksti}) => {
  return(
    <div>
      <button onClick= {handleClick} >
        {teksti}
      </button>
    </div>
  )
}

const Tilasto = ({teksti,maara}) => {
  return (
    <div>
      {teksti} {maara}<br/>
    </div>
  )
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

  lisaaYksiHyva = () => {
    this.setState({hyvat: this.state.hyvat + 1 })
  }

  lisaaYksiNeutraali = () => {
    this.setState ({neutraalit: this.state.neutraalit + 1})
  }

  lisaaYksiHuono = () => {
    this.setState ({huonot: this.state.huonot + 1})
  }



  render () {
    return (
      <div>
        <Otsikko teksti = 'anna palautetta' />
        <Nappi
          handleClick = {this.lisaaYksiHyva}
          teksti = 'hyvä'
          />
        <Nappi
          handleClick = {this.lisaaYksiNeutraali}
          teksti = 'neutraali'
        />
        <Nappi
          handleClick = {this.lisaaYksiHuono}
          teksti = 'huono'
        />
        <Otsikko teksti = 'statistiikka' />
        <Tilasto
          teksti = 'hyvä'
          maara = {this.state.hyvat}
          />
        <Tilasto
          teksti = 'neutraali'
          maara = {this.state.neutraalit}
        />
        <Tilasto
          teksti = 'huono'
          maara = {this.state.huonot}
        />
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
