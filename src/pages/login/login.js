import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Loader } from "../../components/utilities/loader";
import { handleValidation } from "../../components/utilities/validations";
import { UserLogin } from "../../store/login/loginService";

function Login() {
    const { login, alert } = useSelector((state) => state);
    const [state, setState] = useState({ email: '', password: '' });
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        let conditions = [
            { condition: 'required', name: 'email', value: state.email, text: 'Email' },
            { condition: 'required', name: 'password', value: state.password, text: 'Password' },
        ]
        let errors = handleValidation(conditions);
        if (!errors.isError) {
            let data = {
                username: state.email,
                password: state.password
            }
            setError({});
            dispatch(UserLogin(data));
        } else {
            setError(errors.errors);
        }
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className="login-box">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-5 text-center">
                            {/**<img src="img/logo.jpg" style={{ width: 520, height:200}} alt="img" /> **/}
                            {/**<span style={{ fontSize: '4rem' }}>Intelligent Inventory Manager</span>**/}
                            <p className="medium ft-23 mb-4">Login</p>
                            <form onSubmit={handleLogin}>   
                                <div className="form-group position-relative">
                                    <img src="img/icon/mail-outline.png" alt='img' className="img-fluid login-fc-icon" />
                                    <input type="text" value={state.email} name="email" onChange={handleChange} autoFocus={true} placeholder="Email address" className="login-form-control" />
                                    {error.email ? <span className='text-danger floatRight'>{error.email}</span> : null}
                                </div>
                                <div className="form-group position-relative">
                                    <img src="img/icon/password.png" alt='img' className="img-fluid login-fc-icon" />
                                    <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" className="login-form-control" />
                                    {error.password ? <span className='text-danger floatRight'>{error.password}</span> : null}
                                </div>
                                {/* <div className="form-group pt-3">
                                    <label className="container1">Stay logged in
                                        <input type="checkbox" defaultChecked={true} />
                                        <span className="checkmark" />
                                    </label>
                                </div> */}
                                <div className="form-group">
                                    <button type='submit' className="btn btn-theme w-100" onClick={(e) => alert?.alert ? null : handleLogin(e)}>{login?.loading ? <Loader /> : null} Let me in!</button>
                                </div>
                                <div className="form-group text-center">
                                    <Link to="/forgot"> Forgot <span className="text-theme">Password?</span></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="s-footer text-center copyright">
                @ Builders 2021-2022
            </footer>
        </div>

    );
}

export default Login;
