// 展示組件
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaPinterestP, FaEnvelope } from 'react-icons/fa'
import { IoLogoYoutube, IoMdVideocam } from 'react-icons/io'
import { MdWork, MdSchool, MdStar } from 'react-icons/md'
// import { DiPhotoshop, DiIllustrator } from 'react-icons/di'

export const SvgIcon = (type, name) => {
  switch (type) {
    case 'Contact':
      switch (name) {
        case 'linkedin':
          return <FaLinkedinIn />
        case 'facebook':
          return <FaFacebookF />
        case 'pinterest':
          return <FaPinterestP />
        case 'instagram':
          return <FaInstagram />
        case 'youtube':
          return <IoLogoYoutube />
        case 'email':
          return <FaEnvelope />
        default:
          return null
      }
    case 'VerticalTimeline':
      switch (name) {
        case 'star':
          return <MdStar />
        case 'work':
          return <MdWork />
        case 'education':
          return <MdSchool />
        case 'portfolio':
          return <IoMdVideocam />
        default:
          return null
      }
    default:
      return null
  }
}

export const IconType = {
  Contact: 'Contact',
  VerticalTimeline: 'VerticalTimeline',
}
