import React from 'react'
import { Required } from '../utilities/required'

export default function Input({ label, type, name, value, onchange, placeholder, required = false, error = '', autoFocus = false }) {
    return (
        <div className="form-group">
            <label className="mb-2">{label} {required ? <Required /> : null} {error ? <span className='text-danger floatRight'>{error}</span> : null}</label>
            <input type={type} className="form-control" placeholder={placeholder} autoFocus={autoFocus} name={name} value={value} onChange={onchange} />
        </div>
    )
}