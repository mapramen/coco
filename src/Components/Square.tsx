import React from 'react';
import ReactDOM from 'react-dom';
import '../GameApp.css';

interface ISquareProps {
    onClick: () => void,
    value: string
}

export default class Square extends React.Component<ISquareProps> {
    constructor(props: ISquareProps){
        super(props);
    }
    render(){
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}