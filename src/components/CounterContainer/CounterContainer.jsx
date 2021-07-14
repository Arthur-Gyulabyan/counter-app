import React from 'react';
import AbstractButton from '../AbstractButton/AbstractButton';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    increaseCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1,
            };
        });
    };

    decreaseCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1,
            };
        });
    };

    resetCounter = () => {
        this.setState({counter: 0});
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <AbstractButton doSomething={this.increaseCounter} btnText="Increase" />
                <AbstractButton doSomething={this.decreaseCounter} btnText="Decrease" />
                <AbstractButton doSomething={this.resetCounter} btnText="Reset" />
            </div>
        );
    }
}

export default CounterContainer;
