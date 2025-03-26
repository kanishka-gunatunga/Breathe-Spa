/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import style from '@/styles/services.module.css'
import Link from 'next/link';

interface MainTitleProps {
  text: string;
  link: any;
}

const DarkButton: React.FC<MainTitleProps> = (props) => {
  return (
    <Link href={props.link} className={style.darkButton}>{props.text}</Link>
  )
}

export default DarkButton
