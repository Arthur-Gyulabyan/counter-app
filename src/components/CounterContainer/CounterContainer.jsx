import React from 'react';
import AbstractButton from '../AbstractButton/AbstractButton';
import InputNumber from '../InputNumber/InputNumber';
import { saveData, getData } from '../../helpers/localStorage';
import './CounterContainer.css';

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);

        const initialCount = getData('counter') ?? 0;
        const maxCount = getData('maxCount') ?? 100;
        const minCount = getData('minCount') ?? 0;
        const step = getData('step') ?? 1;

        this.state = {
            counter: initialCount,
            maxCount,
            minCount,
            step,
        };
    }

    increaseCounter = () => {
        if (this.state.counter + this.state.step < this.state.maxCount) {
            saveData('counter', this.state.counter + this.state.step);

            this.setState((prevState) => {
                const newValue = prevState.counter + this.state.step;

                return {
                    counter: newValue,
                };
            });
        } else {
            saveData('counter', this.state.maxCount);

            this.setState(() => {
                return {
                    counter: this.state.maxCount,
                };
            });
        }
    }

    decreaseCounter = () => {
        if (this.state.counter - this.state.step > this.state.minCount) {
            saveData('counter', this.state.counter - this.state.step);

            this.setState((prevState) => {
                const newValue = prevState.counter - this.state.step;

                return {
                    counter: newValue,
                };
            });
        } else {
            saveData('counter', this.state.minCount);

            this.setState(() => {
                return {
                    counter: this.state.minCount,
                };
            });
        }

    }

    resetCounter = () => {
        saveData('counter', 0);
        this.setState({counter: 0});
    }

    setMaxCount = (event) => {
        this.setState(() => {
            const newValue = event.target.value;

            saveData('maxCount', Number(newValue));
            return {
                maxCount: Number(newValue),
            };
        });
    }

    setMinCount = (event) => {
        this.setState(() => {
            const newValue = event.target.value;

            saveData('minCount', Number(newValue));
            return {
                minCount: Number(newValue),
            };
        });
    }

    setStep = (event) => {
        this.setState(() => {
            const newValue = event.target.value;

            saveData('step', Number(newValue));
            return {
                step: Number(event.target.value),
            };
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="input-container">
                    <InputNumber name="Max Value" id="max-value" defaultValue={this.state.maxCount} handler={this.setMaxCount} />
                    <InputNumber name="Min Value" id="min-value" defaultValue={this.state.minCount} handler={this.setMinCount} />
                    <InputNumber name="Step" id="step" defaultValue={this.state.step} handler={this.setStep} />
                </div>

                <p className="counter">{this.state.counter}</p>

                <div className="button-container">
                    <AbstractButton handler={this.increaseCounter} btnText="Increase" />
                    <AbstractButton handler={this.decreaseCounter} btnText="Decrease" />
                    <AbstractButton handler={this.resetCounter} btnText="Reset" />
                </div>
            </div>
        );
    }
}

export default CounterContainer;
