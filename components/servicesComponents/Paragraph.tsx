import React from 'react'
import style from '@/styles/services.module.css'

interface MainTitleProps {
  text: string;
}

const Paragraph: React.FC<MainTitleProps> = (props) => {
  return (
    <h2 className={`${style.paragraph} mb-0`}>{props.text}</h2>
  )
}

export default Paragraph
