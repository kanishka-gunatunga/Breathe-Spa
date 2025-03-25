'use client';
import React from 'react';
import Link from 'next/link';


interface ButtonProps {
    text: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
    const buttonElement = (
        <button type="button" className="brownButton">
            {text}
        </button>
    );

    return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default Button;
