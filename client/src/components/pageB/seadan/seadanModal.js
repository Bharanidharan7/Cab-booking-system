import React from 'react';
import Modal from 'react-modal';

const SeadanModal = (props) => (
    <Modal
        isOpen={(!!props.selectedOption)}
        onRequestClose={props.handleOkay}
        contentLabel="selectedOption"
        closeTimeoutMS={200}
        className="modal"
        >
        <h1 className="modal__title">Selected option is </h1>
        <p className="modal__body">{props.selectedOption}</p>
       <button className="button" onClick={props.handleOkay}>Okay</button>
    </Modal>
);

export default SeadanModal