import React from 'react';

class AbstractButton extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    lifterFunc = () => {
        this.props.doSomething();
    };

    render() {
        return (
            <button onClick={this.lifterFunc}>{this.props.btnText}</button>
        );
    }
}

export default AbstractButton;
