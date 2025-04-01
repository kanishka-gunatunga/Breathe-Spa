import React from 'react'
import pageStyle from '@/styles/page.module.css'

interface MainTitleProps {
  title: string;
}

const MainTitle: React.FC<MainTitleProps> = (props) => {
  return (
    <h2 className={`${pageStyle.section_title} mb-0`}>{props.title}</h2>
  )
}

export default MainTitle
