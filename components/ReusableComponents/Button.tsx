'use client';
import React from 'react';
import Link from 'next/link';
import pageStyle from '@/styles/services.module.css'
import { Url } from 'next/dist/shared/lib/router/router';



interface ButtonProps {
    text: string;
    href?: any;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
    const buttonElement = (
        <button type="button" className={`${pageStyle.darkButton}`}>
            {text}
        </button>
    );

    return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default Button;
