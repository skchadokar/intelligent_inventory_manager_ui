import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { handleValidation } from "../../components/utilities/validations";
import { ForgotPassword, UserLogin } from "../../store/login/loginService";

function Forgot() {
    let { login } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [state, setState] = useState({ modal: false, email: '' });
    const [error, setError] = useState({});

    const handleLogin = (e) => {
        // const dispatch(useDispatch
        dispatch(UserLogin({ username: 'Oppp', password: 'sdf' }))
    }

    const handleSubmit = () => {
        let conditions = [
            { condition: 'email', name: 'email', value: state.email, text: 'Email' },
            { condition: 'required', name: 'email', value: state.email, text: 'Email' },
        ];
        let errors = handleValidation(conditions);

        if (!errors.isError) {
            setError({});
            let data = {
                username: state.email,
                password: ''
            }

            // setState(state => ({ ...state, modal: true }))
            dispatch(ForgotPassword(data)).then(resp => {
                if (resp.status === 200) setState(state => ({ ...state, modal: true, email: '' }));
            });

        } else {
            setError(errors.errors)
        }
    }

    return (
        <div>
            <div>
                <div className="login-box">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 col-lg-5 text-center">
                                <img src="img/logo.png" className="img-fluid mb-4" alt="img" />
                                <p className="medium ft-23 mb-1">Forgot Password</p>
                                <p className="mb-4">Enter the email associated with your account and we will send an email with instruction to reset your password.</p>
                                {/* <form> */}
                                <div className="form-group position-relative">
                                    <img src="img/icon/mail-outline.png" className="img-fluid login-fc-icon" alt={'img'} />
                                    <input type="text" name='email' onChange={(e) => setState(state => ({ ...state, email: e.target.value }))} placeholder="Email address" className="login-form-control" autoFocus={true} />
                                    {error.email ? <span className='text-danger floatRight'>{error.email}</span> : null}
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-theme w-100" data-bs-toggle="modal" data-bs-target="#sendinstructions" onClick={() => handleSubmit()}>Send Instructions!</button>
                                </div>
                                <div className="form-group text-center">
                                    <Link to="/login"><span className="text-theme"><i className='fa fa-cog' /> Login</span></Link>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="s-footer text-center copyright">
                    @ Builders 2021-2022
                </footer>
            </div>

            <div className={`modal fade ${state.modal ? 'show shown' : ''}`} id="sendinstructions" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" >
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button onClick={() => setState(state => ({ ...state, modal: false }))} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            <img src="img/icon/twotone-mark-email-read.png" className="img-fluid mb-4" alt="img" />
                            <p className="medium ft-23 mb-1">Check your Email!</p>
                            <p className="mb-4">We have sent a password recover instruction to your mail</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Forgot;
