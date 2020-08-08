import React, { InputHTMLAttributes } from 'react';
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
    label: string;
    name: string;
}

// ...rest guarda todas as propriedades que o input html pode receber
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    )
}

export default Input;