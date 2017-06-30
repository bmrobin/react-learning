import React from 'react';
import { Board } from './Board';
import { calculateWinner } from './calculateWinner';

export class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      movesRemaining: 9,
      stepNumber: 0
    }
  }

  resetGame() {
    this.setState({
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      movesRemaining: 9,
      stepNumber: 0
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice();
    if (calculateWinner(squaresCopy, this.state.movesRemaining) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squaresCopy}]),
      xIsNext: !this.state.xIsNext,
      movesRemaining: this.state.movesRemaining - 1,
      stepNumber: history.length
    });
  }

  jumpToMove(moveIndex) {
    this.setState({
      stepNumber: moveIndex,
      xIsNext: (moveIndex % 2) === 0,
      movesRemaining: 9 - moveIndex
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.movesRemaining);
    
    const moves = history.map((step, move) => {
      const description = move ? 'Move #' + move : 'Beginning of Game';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpToMove(move)}>{description}</a>
        </li>
      );
    });
    
    let status;
    if (winner === 'stalemate') {
      status = 'Stalemate! Try again';
    } else if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div className="status">
            {status}
            <span className="resetGameBtn">
              <button onClick={() => { this.resetGame() }}>Reset Game</button>
            </span>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
