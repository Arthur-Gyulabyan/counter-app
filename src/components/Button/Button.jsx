import React from 'react';
import './Button.css';

export default function Button({ btnText, handler }) {
  const lifterFunc = () => {
    handler();
  };

  return (
    <button onClick={lifterFunc} className="button">
      {btnText}
    </button>
  );
}
