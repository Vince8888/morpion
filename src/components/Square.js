import React from 'react';
import '../css/Square.css'

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.click()}>
                {this.props.value}
            </button>
        );
    }
}
export default Square;
