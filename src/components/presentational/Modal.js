import Portal from '@components/Portal'

import styles from '@sass/components/modal.module.scss'

const Modal = ({ children, onClose, isOpen = false, canShadowClose = false }) => {
  console.log('render Modal')

  return (
    <>
      {isOpen && (
        <Portal selector="#modal">
          <div
            role="presentation"
            className={styles.modal}
            style={{ display: isOpen ? 'block' : 'none' }}
            onClick={canShadowClose ? onClose : null}
          >
            <div
              role="presentation"
              className={styles.content}
              onClick={e => {
                e.stopPropagation()
                e.nativeEvent.stopImmediatePropagation()
              }}
            >
              {children}
              <div role="button" tabIndex={0} className={styles.closeBtn} onClick={onClose} onKeyUp={onClose}>
                Close
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  )
}
export default Modal
