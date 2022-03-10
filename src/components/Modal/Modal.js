import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'
import s from './Modal.module.css'

const modalRoot = document.getElementById('modal-root')

export default function Modal({ show, close, children }) {
  return createPortal(
    show ? (
      <div className={s.styledOverlay}>
        {children}
        <button onClick={close} className={s.close_btn}>
          X
        </button>
      </div>
    ) : null,
    modalRoot,
  )
}
