/* eslint-disable no-param-reassign */
import NotFound from '@static/images/NotFound.png'

export const Img = {
  OnError: ({ target: img }) => {
    img.onerror = null
    img.src = NotFound
  },
  onLoad: ({ target: img }) => {
    if (img.naturalWidth > img.naturalHeight) {
      img.classList.add('landscape')
    }
  },
}

export { Img as default }
