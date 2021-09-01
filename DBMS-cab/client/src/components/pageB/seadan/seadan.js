import React from 'react';

const SeadanModal = (props) => (
    <div>
            <button  onClick={props.handlePick} disabled={!props.hasOptions}>4 seats</button>
        </div>
    );

export default SeadanModal