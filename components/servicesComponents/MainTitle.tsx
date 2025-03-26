import React from 'react'
import style from '@/styles/services.module.css'

interface MainTitleProps {
  title: string;
}

const MainTitle: React.FC<MainTitleProps> = (props) => {
  return (
    <h2 className={style.mainTitle}>{props.title}</h2>
  )
}

export default MainTitle
