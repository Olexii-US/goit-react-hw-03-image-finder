import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyles } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyles>
          <img src={largeImageURL} alt={tags} />
        </ModalStyles>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
