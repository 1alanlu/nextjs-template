import PropTypes from 'prop-types'
import classnames from 'classnames'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react'

const VerticalTimelineElement = props => {
  const { id, children, icon, iconStyle, iconOnClick, date, position, style, className, visibilitySensorProps } = props
  const [isVisible, setIsVisible] = useState(false)

  const onVisibilitySensorChange = _isVisible => {
    setIsVisible(_isVisible)
  }

  return (
    <div
      id={id}
      style={style}
      className={classnames(className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === '',
      })}
    >
      <VisibilitySensor {...visibilitySensorProps} onChange={onVisibilitySensorChange}>
        <div>
          <span
            role="button"
            tabIndex={0}
            style={iconStyle}
            onClick={iconOnClick}
            onKeyUp={iconOnClick}
            className={classnames('vertical-timeline-element-icon', {
              'bounce-in': isVisible,
              'is-hidden': !isVisible,
            })}
          >
            {icon}
          </span>
          <div
            className={classnames('vertical-timeline-element-content', {
              'bounce-in': isVisible,
              'is-hidden': !isVisible,
            })}
          >
            {children}
            <span className="vertical-timeline-element-date">{date}</span>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  )
}

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  icon: PropTypes.element,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  style: PropTypes.shape({}),
  date: PropTypes.node,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
}

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 80 } },
}

export default VerticalTimelineElement
