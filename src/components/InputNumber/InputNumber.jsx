import React from 'react';
import './InputNumber.css'

class InputNumber extends React.Component {
    normalize = (event) => {
        const input = event.target;

        if (input.value[0] === '0') {
            input.value = input.value.slice(1);
        }

        if (input.value.length > input.maxLength) {
            input.value = input.value.slice(0, input.maxLength);
        }
    }

    render() {
        const {name, id, defaultValue, handler} = this.props;

        return (
            <div className="input-wrapper">
                <label htmlFor={id}>{name}</label>
                <input onChange={(event) => {
                    handler(event);
                    this.normalize(event);
                }} type="number" placeholder={name} value={defaultValue} name={name} id={id} className='input-number' maxLength='4'/>
            </div>
        )
    }
}

export default InputNumber;
