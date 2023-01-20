import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Overlay = () => {
    return <div className="overlay" />;
  };
  
  const ModalOverlay = (props) => {
    return (
        <div className='modal'>
            {props.children}
            <button onClick={props.onClose}>Close</button>
        </div>
    );
  };
  
  const Modal = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Overlay />,
          document.querySelector('#overlay-root'),
        )}
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