import React from 'react'
import { Loader } from '../utilities/loader'
import { Required } from '../utilities/required'

export default function Select({ label, name, value, onchange, options = [], required = false, error = '', autoFocus = false, loading = false }) {
    return (
        <div className="form-group">
            <label className="mb-2">{label} {required ? <Required /> : null} {loading ? <Loader /> : null} {error ? <span className='text-danger floatRight'>{error}</span> : null}</label>
            <select className="form-select" name={name} value={value} onChange={onchange} autoFocus={autoFocus}>
                {options.length > 0 ?
                    <>
                        <option value=''>Select {label}</option>
                        {options.map((val, i) => {
                            return <option key={val.key} value={val.key}>{val.name}</option>
                        })}
                    </>
                    : <option value=''>No Options</option>}
            </select>
        </div>
    )
}