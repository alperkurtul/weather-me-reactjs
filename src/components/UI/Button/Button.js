import React from 'react';

const button = (props) => (
    <button
        className="ButtonUI" onClick={props.clicked}>{props.children}</button>
);

export default button;