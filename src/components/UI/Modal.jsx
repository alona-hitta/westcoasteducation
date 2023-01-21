import { Fragment } from 'react';
import ReactDOM from 'react-dom';
  
  const ModalOverlay = (props) => {
    return (
        <div className='modal'>
            {props.children}
            <button onClick={props.onClose} className='link close'>Close</button>
        </div>
    );
  };
  
  const Modal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <ModalOverlay
            {...props}
          >
            {props.children}
          </ModalOverlay>,
          document.querySelector('#modal-root'),
        )}
      </Fragment>
    );
  };
  
  export default Modal;