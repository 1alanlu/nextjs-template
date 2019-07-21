import PropType from 'prop-types'
import classnames from 'classnames'

const VerticalTimeline = ({ animate, children, className, layout }) => {
  return (
    <div
      className={classnames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column': layout === '1-column',
      })}
    >
      {children}
    </div>
  )
}

VerticalTimeline.propTypes = {
  children: PropType.oneOfType([PropType.arrayOf(PropType.node), PropType.node]).isRequired,
  className: PropType.string,
  animate: PropType.bool,
  layout: PropType.oneOf(['1-column', '2-columns']),
}

VerticalTimeline.defaultProps = {
  animate: true,
  className: '',
  layout: '2-columns',
}

export default VerticalTimeline
