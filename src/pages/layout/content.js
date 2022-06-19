import React from "react"

export default function content() {
    return (
        <React.Fragment>
            <div className="main-content">
                <p className="medium ft-23 mb-4">Dashboard</p>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <a href="customer-list.html">
                            <div className="dashboard-box">
                                <p className="medium ft-23 mb-2">Total Customers</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" className="bi bi-people me-1" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                    </svg> <div className="medium d-inline-block">5,650</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <a href="device-list.html">
                            <div className="dashboard-box">
                                <p className="medium ft-23 mb-2">Total CPE Devices</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" className="bi bi-laptop me-1" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                    </svg> <div className="medium d-inline-block">3,246</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center op-7">@ Builders 2021-2022
            </div>
        </React.Fragment>

    )
}
