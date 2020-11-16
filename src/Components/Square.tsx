import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import '../GameApp.css';
import { IAction, playMove } from '../Redux/actions';
import { RootState } from '../Redux/Reducers';

interface ISquareStateToProps {

}

interface ISquareDispatchToProps {
    selectTile: (squareNumber: number) => IAction
}

interface ISquareOwnProps {
    squareNumber: number,
    value: string
}

const mapDispatchToProps: ISquareDispatchToProps = {
    selectTile: playMove
}

type ISquareProps = ISquareStateToProps & ISquareDispatchToProps & ISquareOwnProps;

class Square extends React.Component<ISquareProps> {
    constructor(props: ISquareProps){
        super(props);
    }
    render(){
        return (
            <button className="square" onClick={() => this.props.selectTile(this.props.squareNumber)}>
                {this.props.value}
            </button>
        );
    }
}

export default connect<
    ISquareStateToProps,
    ISquareDispatchToProps,
    ISquareOwnProps,
    RootState>(null, mapDispatchToProps)(Square)