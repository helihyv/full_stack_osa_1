import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      selected : 0,
      votes : [0,0,0,0,0,0]
      }
  }

  handleClick = () => {
    this.setState({selected : Math.floor (Math.random() * 6 )})

  }

  addVote = () => {
    const votesTable = this.state.votes
    votesTable[this.state.selected] += 1
    this.setState({votes : votesTable})
  }


  render () {

    const winner = this.state.votes.reduce((winner,value,index) => {
      if (value > winner.votes) {
        winner.votes = value
        winner.index = index
      }
      return winner
    }, {votes : 0, index : 0})

    return (
      <div>
        <p>
          {this.props.anecdotes[this.state.selected]}
          <br/>
          has {this.state.votes[this.state.selected]} votes
        </p>
        <button onClick = {this.addVote}>
          vote
        </button>
        <button onClick = {this.handleClick} >
          next anecdote
        </button>
        <h1>
          anecdote with most votes:
        </h1>
        <p>
          {this.props.anecdotes[winner.index]}
          <br/>
          has {winner.votes} votes
        </p>

      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root'));
