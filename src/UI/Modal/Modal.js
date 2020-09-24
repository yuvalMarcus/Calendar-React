import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = props => {
    return ReactDOM.createPortal(
        (
            <React.Fragment>
                <div className={'Backdrop'} onClick={props.onClose} />
                <div className={'Modal'}>
                    <h2>{props.title}</h2>
                    {props.children}
                    <div className={'ModalActions'}>
                        <button type="button" className={'Close'} onClick={props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </React.Fragment>
        ), document.body)
};

export default Modal;
