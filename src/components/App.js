import React from 'react';
import '../css/App.css';
import Board from './Board.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gamer: 'X',
            status: ''
        }
    }
    onClickSquare = (xIsNext) => {
        this.setState(prevState => ({
            gamer: (xIsNext ? 'X' : 'O')
        }))
    }
    onGameEnd = (winner) => {
        this.setState({ status: "Le gagnant est " + winner });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="game-info">
                        <div>Tour du joueur : {this.state.gamer}</div>
                    </div>
                    <div><Board gamer={this.onClickSquare} onGameEnd={this.onGameEnd} /></div>
                    <div className="game-info">
                        <div>{this.state.status}</div>
                    </div>
                </header>
            </div>
        );
    }
}
export default App;
