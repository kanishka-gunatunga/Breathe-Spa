import React from 'react'
import pageStyle from '@/styles/page.module.css'

interface MainTitleProps {
  text: string;
}

const Paragraph: React.FC<MainTitleProps> = (props) => {
  return (
    <h2 className={`${pageStyle.map_hours_desc} mb-0 preserve-linebreaks`}>{props.text}</h2>
  )
}

export default Paragraph
