// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AdminRoles } from '../../components/utilities/functions';
import { Navigation } from '../../store/common/commonService';
import { UserLogout } from '../../store/login/loginService';
// import { Loader } from "../../components/utilities/loader";
// import { UserLogin } from "../../store/login/loginService";
// import { RootState } from '../../store/rootReducer';

function Sidebar(props) {
    const { userData } = useSelector((state) => state.login);
    // const { login, alert } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const [state, setState] = useState({ notification: false, profile: false });
    const { navigation } = useSelector((state) => state);

    const notification = useRef(null);
    const profile = useRef(null);

    const logoutHandle = (e) => {
        dispatch(UserLogout())
    }

    const toggleHandle = () => {
        props.toggle();
    }

    const navigationHandle = (menu) => {
        dispatch(Navigation(menu));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notification.current && !notification.current.contains(event.target)) {
                setState(state => ({ ...state, notification: false }));
            }
            if (profile.current && !profile.current.contains(event.target)) {
                setState(state => ({ ...state, profile: false }));
            }
        }

        const handleEscape = (event) => {
            if (event.keyCode === 27) {
                setState(state => ({ ...state, profile: false, notification: false }));
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [notification, profile]);

    const getInitial = () => {
        let initial = 'A';
        if (userData?.userName) {
            initial = userData.userName[0] ? userData.userName[0].toUpperCase() : 'A';
        }
        return initial;
    }

    return (
        <React.Fragment>
            <div className="navbar">
                <div className={props.isToggle ? "topnav" : "topnav open1"}>
                    <div className="menu-toggle" onClick={toggleHandle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <ul className="list-unstyled mb-0">
                        {/* <li className=" dropdown progile-dropdown list-inline-item me-3 position-relative" onClick={() => setState({ ...state, notification: true })}>
                            <span className={`dropdown-toggle text-muted pr-0 ${state.notification ? 'show' : null}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                                <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                                <span className="dot" />
                            </span>
                            <div ref={notification} className={`dropdown-menu dropdown-menu-end notify-dropdown ${state.notification ? 'show' : null}`} aria-labelledby="navbarDropdownMenuLink" data-bs-popper="none">
                                <ul className="list-unstyled mb-0">
                                    <li>Package is zipped and uploaded <p className="mt-1 mb-0 op-8"><small>2:00 pm</small></p></li>
                                    <li>Package is zipped and uploaded <p className="mt-1 mb-0 op-8"><small>2:00 pm</small></p></li>
                                    <li>Package is zipped and uploaded <p className="mt-1 mb-0 op-8"><small>2:00 pm</small></p></li>
                                    <li>Package is zipped and uploaded <p className="mt-1 mb-0 op-8"><small>2:00 pm</small></p></li>
                                    <li></li>
                                </ul>
                            </div>
                        </li> */}
                        <li className="dropdown progile-dropdown list-inline-item" onClick={() => setState({ ...state, profile: true })}>
                            <span className={`dropdown-toggle text-muted pr-0 ${state.profile ? 'show' : null}`} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="avatar avatar-sm mt-2">
                                    {/* <img src="img/face-1.jpg" alt="..." className="avatar-img rounded-circle" /> */}
                                    <span className="avatar-img rounded-circle profileIcon">{getInitial()}</span>

                                </span>
                            </span>
                            <div ref={profile} className={`dropdown-menu dropdown-menu-end ${state.profile ? 'show' : null}`} aria-labelledby="navbarDropdownMenuLink" data-bs-popper="none" >
                                {/* <a className="dropdown-item" href="profile.html">Profile</a>
                                <a className="dropdown-item" href="settings.html">Settings</a> */}
                                <span className="dropdown-item logout" onClick={logoutHandle}>Log Out</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={props.isToggle ? "sidebar-left" : "sidebar-left close1"}>
                <div className="sidebar-left-pad">
                    <div className="colse-sidebar" onClick={toggleHandle}> <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></div>
                    {/* <img src="img/logo.png" className="img-fluid s-logo" alt="img" /> */}
                    <span style={{ fontSize: '26px', paddingLeft: '42px' }}>{/**BUILDERS**/}</span>
                    <div className="sidebar-ul" style={{ marginTop: '2rem' }}>
                        <ul className="list-unstyled">
                            <li onClick={() => navigationHandle('dashboard')}><Link to="/" className={navigation.menu === 'dashboard' ? "active" : ""}><svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-house me-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg> Dashboard</Link></li>
                        </ul>
                        <p className="op-7 mt-4">User</p>
                        <ul className="list-unstyled">
                            <li onClick={() => navigationHandle('userList')}><Link to="/users-list" className={navigation.menu === 'userList' ? "active" : ""}><svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-people me-2" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                            </svg> User List</Link></li>
                            {AdminRoles.includes(userData?.userType) ?
                                <li onClick={() => navigationHandle('userAdd')}><Link to="/user-add" className={navigation.menu === 'userAdd' ? "active" : ""}><svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" className="bi bi-plus-lg me-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg> Add User</Link></li>
                                : null}
                        </ul>



                    </div>
                    <div className="text-center">
                        <button className="btn btn-theme" onClick={logoutHandle} > <img src="img/icon/logout.png" className="img-fluid me-2" alt="img" />Logout</button>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Sidebar;
