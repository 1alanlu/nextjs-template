/* eslint-disable react/no-danger */
import { memo } from 'react'

// 展示組件
import Ink from 'react-ink'
import { VerticalTimeline, VerticalTimelineElement } from '@utils/vendors/VerticalTimeline'
import { SvgIcon, IconType } from '@components/presentational/SvgIcon'
import Image from '@components/presentational/Image'

// 樣式
import '@sass/vendors/react-vertical-timeline-component.scss'
import '@sass/vendors-extensions/_react-vertical-timeline-component.scss'

const VerticalTimelineRoot = memo(
  ({ column, data }) => {
    console.log('render VerticalTimelineRoot')

    if (!data) return null
    return (
      <VerticalTimeline layout={column === 1 ? '1-column' : '2-columns'}>
        {data.map(item => (
          <CovertVerticalTimelineElement key={item.id} {...item} />
        ))}
        <VerticalTimelineElement
          className="vertical-timeline-element--start"
          icon={SvgIcon(IconType.VerticalTimeline, 'star')}
        />
      </VerticalTimeline>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.data === nextProps.data
  }
)

const CovertVerticalTimelineElement = prop => {
  console.log('CovertVerticalTimelineElement')

  const { theme, date, tags, technologies, links, title, subtitle, photos, logo, content, onClick } = prop

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${theme}`}
      date={date}
      icon={SvgIcon(IconType.VerticalTimeline, theme)}
      iconOnClick={onClick}
      visibilitySensorProps={{ partialVisibility: true, offset: { top: process.env.TRIGGER_OFFSET } }}
    >
      {title && (
        <h3 className="vertical-timeline-element-title">
          <span>{title}</span>
          {logo && (
            <div className="logo">
              <Image alt="logo" src={logo} progressive={false} />
            </div>
          )}
        </h3>
      )}
      {subtitle && <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>}
      {photos && <Photos photos={photos} />}
      {content &&
        (Array.isArray(content) ? <Content {...content} /> : <div dangerouslySetInnerHTML={{ __html: content }} />)}
      {technologies && <Technologies {...technologies} />}
      {tags && <Tags {...tags} />}
      {links && <Links {...links} />}
    </VerticalTimelineElement>
  )
}

const Content = content => {
  console.log('resumeProjectsBlock-content')

  const Li = data => (
    <>
      {Object.keys(data).map(index => (
        <li key={index}>{data[index]}</li>
      ))}
    </>
  )

  return (
    <>
      {Object.keys(content).map(index => (
        <div key={index} className="resumeProjectsBlock-content">
          {content[index].h1 && <h1 dangerouslySetInnerHTML={{ __html: content[index].h1 }} />}
          {content[index].h2 && <h2 dangerouslySetInnerHTML={{ __html: content[index].h2 }} />}
          {content[index].h3 && <h3 dangerouslySetInnerHTML={{ __html: content[index].h3 }} />}
          {content[index].h4 && <h4 dangerouslySetInnerHTML={{ __html: content[index].h4 }} />}
          {content[index].h5 && <h5 dangerouslySetInnerHTML={{ __html: content[index].h5 }} />}
          {content[index].h6 && <h6 dangerouslySetInnerHTML={{ __html: content[index].h6 }} />}
          {content[index].list_ul && (
            <ul>
              <Li {...content[index].list_ul} />
            </ul>
          )}
          {content[index].youtube && (
            <div className="iframe">
              <iframe src={content[index].youtube} title={content[index].youtube_title} />
            </div>
          )}
          {content[index].list_ol && (
            <ol>
              <Li {...content[index].list_ol} />
            </ol>
          )}
          {content[index].p && <p dangerouslySetInnerHTML={{ __html: content[index].p }} />}
        </div>
      ))}
    </>
  )
}

const Photos = ({ photos }) => {
  console.log('resumeProjectsBlock-photos')

  return (
    <div className="resumeProjectsBlock-photos">
      {photos.map(item => (
        <div key={item.id} className="photo">
          <Image src={item.src} defaultOnLoad={false} />
        </div>
      ))}
    </div>
  )
}

const Technologies = technologies => {
  console.log('resumeProjectsBlock-technologies')

  return (
    <div className="resumeProjectsBlock-technologies">
      {Object.keys(technologies).map(index => (
        <div role="button" key={index}>
          <span>{technologies[index]}</span>
        </div>
      ))}
    </div>
  )
}

const Tags = tags => {
  console.log('resumeProjectsBlock-tags')

  return (
    <div className="resumeProjectsBlock-tags">
      {Object.keys(tags).map(index => (
        <div role="button" key={index}>
          <span>{tags[index]}</span>
        </div>
      ))}
    </div>
  )
}

const Links = links => {
  console.log('resumeProjectsBlock-links')

  return (
    <div className="resumeProjectsBlock-links">
      {Object.keys(links).map(index => (
        <a key={index} role="button" rel="noopener noreferrer" target="_blank" href={links[index].url}>
          <span>{links[index].display}</span>
          <Ink />
        </a>
      ))}
    </div>
  )
}

export default VerticalTimelineRoot
