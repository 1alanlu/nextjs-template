/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { useEffect, useRef, useMemo } from 'react'

// 展示組件
import Layout from '@components/Layout'
import Hero from '@components/container/Hero'
import Block from '@components/container/Block'
import Profile from '@components/container/Profile'
import Hobbies from '@components/container/Hobbies'
import Skills from '@components/container/Skills'
import VerticalTimelineRoot from '@components/container/VerticalTimeline'

// 工具
import { Compare } from '@utils/common/Compare'

// 資料
import ProfileData from '@static/data/profile.json'
import HobbiesData from '@static/data/hobbies.json'
import SkillsData from '@static/data/skills.json'
import ExperienceData from '@static/data/experience.json'

// 區塊資料
const BlockData = [
  {
    id: 10,
    anchor: 'aboutMe',
    display: '關於我',
    // icon: 'images/hero/about.jpg',
    content: <Profile data={ProfileData} />,
  },
  {
    id: 20,
    anchor: 'hobbiesAndInterests',
    display: '興趣 & 嗜好',
    // icon: 'images/hero/hobbies.jpg',
    content: <Hobbies data={HobbiesData.sort(Compare.ID_ASC)} />,
  },
  {
    id: 30,
    anchor: 'skills',
    display: '技能',
    // icon: 'images/hero/skills.jpg',
    content: <Skills data={SkillsData.sort(Compare.ID_ASC)} />,
  },
  {
    id: 40,
    anchor: 'experienceAndEducation',
    display: '學歷 & 經歷',
    // icon: 'images/hero/work.jpg',
    content: <VerticalTimelineRoot column={2} data={ExperienceData.sort(Compare.ID_DESC)} />,
  },
]

const ResumePageContent = () => {
  console.log('render ResumePageContent')

  // 引用
  const blockRef = useRef([])

  // 初始引用組數長度
  useEffect(() => {
    blockRef.current = blockRef.current.slice(0, BlockData.length)
  }, [BlockData])

  const hero = useMemo(() => <Hero data={BlockData} blockRef={blockRef} />, [BlockData])
  const block = useMemo(() => <Block data={BlockData} blockRef={blockRef} />, [BlockData])

  return (
    <Layout title="Resume" desc={ProfileData.introduction}>
      {hero}
      {block}
    </Layout>
  )
}

export default ResumePageContent
