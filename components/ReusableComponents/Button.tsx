'use client';
import React from 'react'

const Button = () => {
    return (
        <button type="button" className="btn btn-primary"  onClick={() => console.log('Clicked!')}>
            Click Me
        </button>

    )
}

export default Button