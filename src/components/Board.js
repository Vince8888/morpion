import React from 'react';
import '../css/Board.css';
import Square from './Square.js';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: null,
        };
    }
    handleClick(i) {
        if (this.state.squares[i] === null && this.calculateWinner(this.state.squares) === null) {
            const squaresTmp = this.state.squares.slice();
            squaresTmp[i] = this.state.xIsNext ? 'O' : 'X';
            this.setState(prevState => ({
                xIsNext: !prevState.xIsNext,
                squares: squaresTmp
            }));
            this.props.gamer(this.state.xIsNext);
            let winner = this.calculateWinner(squaresTmp);
            console.log(winner);
            if (winner != null) {
                this.props.onGameEnd(winner);
            }
        }
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                click={() => this.handleClick(i)}
            />
        );
    }

    calculateWinner(squares) {
        const winCombi = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < winCombi.length; i++) {
            const [a, b, c] = winCombi[i];
            if (squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
export default Board;