import React from 'react';
import './AbstractButton.css'

class AbstractButton extends React.Component {
    lifterFunc = () => {
        this.props.handler();
    };

    render() {
        const btnInnerText = this.props.btnText;

        return (
            <button onClick={this.lifterFunc} className="button">{btnInnerText}</button>
        );
    }
}

export default AbstractButton;
