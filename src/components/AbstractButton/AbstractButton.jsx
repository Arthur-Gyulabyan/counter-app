import React from 'react';

class AbstractButton extends React.Component {
    lifterFunc = () => {
        this.props.doSomething();
    };

    render() {
        const btnInnerText = this.props.btnText;

        return (
            <button onClick={this.lifterFunc}>{btnInnerText}</button>
        );
    }
}

export default AbstractButton;
