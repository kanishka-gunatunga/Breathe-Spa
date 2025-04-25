/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import style from '@/styles/services.module.css'
import Link from 'next/link';

interface MainTitleProps {
    text: string;
    link: any;
    serviceId?: string;
}

const DarkButton: React.FC<MainTitleProps> = (props) => {
    const href = props.serviceId ? `${props.link}#${props.serviceId}` : props.link;

    return (
        <Link href={href} className={style.darkButton} style={{textTransform: "uppercase"}}>{props.text}</Link>
    )
}

export default DarkButton
