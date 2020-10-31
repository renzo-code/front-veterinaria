import React, { useEffect, useRef } from "react";

import "./ModalStyles.scss";
import "../Button/Button"

import Button from "../Button/Button";

const Modal = ({
  children,
  show,
  onClose,
  onClick,
  nameButton,
  hideButtonCancel = false,
  className,
  disabled,
}) => {
  const refModal = useRef();

  useEffect(() => {
    if (show) {
      refModal.current.style.display = "block";
    } else {
      refModal.current.style.display = "none";
      // eslint-disable-next-line no-unused-expressions
      onClose
    }
  }, [show, onClose]);

  useEffect(() => {
    window.addEventListener("click", hiddenModalIf);
    return () => {
      window.removeEventListener("click", hiddenModalIf);
    };
  });

  const hiddenModalIf = e => {
    if (e.target === refModal.current) {
      refModal.current.style.display = "none";
      // eslint-disable-next-line no-unused-expressions
      onClose
    }
  };

  return (
    <div className="c-wrapper-modal" show={show} ref={refModal}>
      <div className={`content-modal ${className}`}>
        {children}
        <div className="footer-modal">
          {!hideButtonCancel && (
            <Button
              disabled={disabled}
              name="Cancelar"
              className="cancel"
              onClick={onClose}
            />
          )}
          <Button
            disabled={disabled}
            name={nameButton}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;