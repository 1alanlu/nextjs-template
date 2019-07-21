import { memo } from 'react'
import Modal from '@components/presentational/Modal'

const ModalContainer = memo(
  ({ children, onClose, isOpen = false, canShadowClose = false }) => {
    console.log('render ModalContainer')

    return (
      <>
        {isOpen && (
          <Modal onClose={onClose} isOpen={isOpen} canShadowClose={canShadowClose}>
            {children}
          </Modal>
        )}
      </>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.isOpen === nextProps.isOpen
  }
)

export default ModalContainer
