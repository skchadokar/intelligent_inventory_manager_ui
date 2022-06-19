import React from 'react'
import Input from './input'

export function DeleteModal({ text, ondelete, onclose }) {
    return (
        <div className="modal fade show" id="deleteModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" onClick={onclose} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center">
                        <p className="medium ft-23 mb-1">{text}</p>
                        <div className="text-center mb-5 mt-4">
                            <span className="btn btn-secondary" onClick={onclose}>Close</span>
                            <span className="btn btn-danger" onClick={ondelete}>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function AdminModal({ fullName, email, onchange, onclose, onsubmit, isedit, onedit, errors }) {
    return (
        <div className="modal fade show" id="addadminModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" onClick={onclose} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center">
                        <p className="medium ft-23 mb-1">Add Admin</p>
                        <form className="text-start" onSubmit={onsubmit}>
                            <Input type={'text'} autoFocus={true} placeholder='Full Name' value={fullName} label={'Full Name'} onchange={onchange} name='fullName' error={errors.fullName} />
                            <Input type={'text'} placeholder='Email Address' value={email} label={'Email Address'} onchange={onchange} name='email' error={errors.emailAddr} />
                            <div className="text-center mb-5 mt-4">
                                <span className="btn btn-secondary" onClick={onclose}>Cancel</span>
                                <button type='submit' className={isedit ? "btn btn-warning" : "btn btn-theme"} onClick={() => isedit ? onedit() : onsubmit()}>{isedit ? "Edit Admin" : "Add Admin"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CustomModal({ onclose, children }) {
    return (
        <div className="modal fade show" id="deleteModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" onClick={onclose} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}