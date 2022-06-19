import React from 'react'
import { Required } from '../utilities/required'

export default function Textarea({ label, name, value, onchange, placeholder, rows = 4, required = false, error = '' }) {
    return (
        <div className="form-group">
            <label className="mb-2">{label} {required ? <Required /> : null} {error ? <span className='text-danger floatRight'>{error}</span> : null}</label>
            <textarea className="form-control" placeholder={placeholder} name={name} rows={rows} value={value} onChange={onchange} />
        </div>
    )
}