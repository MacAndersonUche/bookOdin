import { ReactElement } from 'react';
import './modal.css';

interface ModalProps {
    handleClose: (val: boolean) => void;
    show: boolean
    children?: ReactElement
}


 const Modal = ({ handleClose, show, children }: ModalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={e => handleClose(false)} className='modal-close'>
          X
        </button>
      </section>
    </div>
  );
};

export default Modal