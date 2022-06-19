import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { handleValidation } from "../../components/utilities/validations";
import { ForgotPassword, ResetPassword, UserLogin } from "../../store/login/loginService";

function Reset() {
    let { login } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState({ modal: false, password: '', confirmPassword: '' });
    const [error, setError] = useState({});

    const { token } = useParams();

    const handleLogin = (e) => {
        // const dispatch(useDispatch
        dispatch(UserLogin({ username: 'Oppp', password: 'sdf' }))
    }
    console.log(token, error)
    const handleSubmit = () => {
        let conditions = [
            { condition: 'match', name: 'confirmPassword', value: state.confirmPassword, value2: state.password, text: 'Confirm Password' },
            { condition: 'minlength', name: 'password', value: state.password, text: 'Password', min: 8 },
            { condition: 'required', name: 'password', value: state.password, text: 'Password' },
            { condition: 'required', name: 'confirmPassword', value: state.confirmPassword, text: 'Confirm Password' },
        ];
        let errors = handleValidation(conditions);

        if (!errors.isError) {
            setError({});
            let data = {
                password: state.password,
                token: token
            }

            // setState(state => ({ ...state, modal: true }))
            dispatch(ResetPassword(data)).then(resp => {
                if (resp.status === 200) navigate('/login');
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
                                <img src="/img/logo.png" className="img-fluid mb-4" alt="img" />
                                <p className="medium ft-23 mb-1">Reset Password</p>
                                {/* <form> */}
                                <div className="form-group position-relative">
                                    <img src="/img/icon/mail-outline.png" className="img-fluid login-fc-icon" alt={'img'} />
                                    <input type="password" name='password' onChange={(e) => setState(state => ({ ...state, password: e.target.value }))} placeholder="New Password" className="login-form-control" autoFocus={true} />
                                    {error.password ? <span className='text-danger floatRight'>{error.password}</span> : null}
                                </div>
                                <div className="form-group position-relative">
                                    <img src="/img/icon/mail-outline.png" className="img-fluid login-fc-icon" alt={'img'} />
                                    <input type="password" name='confirmPassword' onChange={(e) => setState(state => ({ ...state, confirmPassword: e.target.value }))} placeholder="Confirm Password" className="login-form-control" />
                                    {error.confirmPassword ? <span className='text-danger floatRight'>{error.confirmPassword}</span> : null}
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-theme w-100" data-bs-toggle="modal" data-bs-target="#sendinstructions" onClick={() => handleSubmit()}>Reset Password</button>
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

export default Reset;
