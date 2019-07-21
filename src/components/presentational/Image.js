/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import LazyImage from 'react-lazy-progressive-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Img } from '@utils/common/Image'

const Image = styled.img`
  transition-property: filter, opacity;
  transition: 0.25s ease;
  filter: ${props => (props.isLoading ? `blur(5px)` : `none`)};
  opacity: ${props => (props.isLoading ? 0.7 : 1)};
`
const BackgroundImage = styled.div`
  transition-property: filter, opacity;
  transition: 0.25s ease;
  filter: ${props => (props.isLoading ? `blur(5px)` : `none`)};
  opacity: ${props => (props.isLoading ? 0.7 : 1)};
`

const ImageRoot = props => {
  console.log('render Image')

  const { src, progressive, ...others } = props
  if (!src) return null

  const dir = src.split('/')[0]

  switch (dir) {
    case 'images':
      return progressive ? (
        <LazyImage
          src={require(`@static/images/${src.replace(/images\//g, '')}`)}
          placeholder={require(`@static/images/${src.replace(/images\//g, '')}?lqip`)}
          onError={Img.OnError}
          visibilitySensorProps={{ partialVisibility: true, offset: { top: process.env.TRIGGER_OFFSET } }}
        >
          {(_src, loading, isVisible) => {
            return <TempImage {...others} src={_src} isLoading={loading} isVisible={isVisible} />
          }}
        </LazyImage>
      ) : (
        <TempImage {...others} src={require(`@static/${src}`)} />
      )
    case 'svg':
      return <TempImage {...others} src={require(`@static/${src}`)} />
    default:
      return <TempImage {...others} src={src} />
  }
}

ImageRoot.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  defaultOnLoad: PropTypes.bool,
  bg: PropTypes.bool,
  progressive: PropTypes.bool,
}
ImageRoot.defaultProps = {
  alt: '',
  onLoad: null,
  defaultOnLoad: true,
  bg: false,
  progressive: true,
}

const TempImage = props => {
  const { bg, src, onLoad, defaultOnLoad, ...others } = props

  const handleOnLoad = e => {
    if (onLoad) onLoad()
    if (defaultOnLoad) Img.onLoad(e)
  }

  return bg ? (
    <BackgroundImage {...others} style={{ backgroundImage: `url(${src})` }} />
  ) : (
    <Image {...others} src={src} onError={Img.OnError} onLoad={handleOnLoad} />
  )
}
TempImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  defaultOnLoad: PropTypes.bool,
  bg: PropTypes.bool,
  isLoading: PropTypes.bool,
  isVisible: PropTypes.bool,
}
TempImage.defaultProps = {
  alt: '',
  onLoad: null,
  defaultOnLoad: true,
  bg: false,
  isLoading: false,
  isVisible: false,
}

export default ImageRoot
