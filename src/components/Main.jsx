import React from 'react'

export default function Main() {
    return (
        <>

            <div  className="container-fluid">
                <div  className="row">
                    <div  className="col-sm-12">
                        <div  className="page-title-box">
                            <div  className="float-end">
                                <ol  className="breadcrumb">
                                    <li  className="breadcrumb-item"><a href="#">Unikit</a></li>
                                    <li  className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li  className="breadcrumb-item active">Analytics</li>
                                </ol>
                            </div>
                            <h4  className="page-title">Analytics</h4>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-md-12 col-lg-3 order-lg-1 order-md-2 order-sm-2">
                        <div  className="card overflow-hidden">
                            <div  className="card-body">
                                <div  className="pt-3">
                                    <h3  className="text-dark text-center font-24 fw-bold line-height-lg">Unikit <br />Multi Application</h3>
                                    <div  className="text-center text-muted font-16 fw-bold pt-3 pb-1">We Design and Develop Clean and High Quality Web Applications</div>
                                    <div  className="text-center py-3 mb-3"><a  className="btn btn-primary" href="#">Buy Now</a></div>
                                    <img  className="img-fluid px-3 mb-2" src="assets/images/small/business.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-9 order-lg-2 order-md-1 order-sm-1">
                        <div  className="row justify-content-center">
                            <div  className="col-lg-3 col-md-6">
                                <div  className="card overflow-hidden">
                                    <div  className="card-body">
                                        <div  className="row d-flex">
                                            <div  className="col-3"> </div>
                                            <div  className="col-12 ms-auto align-self-center"> </div>
                                            <div  className="col-12 ms-auto align-self-center">
                                                <h3  className="text-dark my-0 font-22 fw-bold">24000</h3>
                                                <p  className="text-muted mb-0 fw-semibold">Sessions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="card overflow-hidden">
                                    <div  className="card-body">
                                        <div  className="row d-flex">
                                            <div  className="col-3"> </div>
                                            <div  className="col-auto ms-auto align-self-center"><span  className="badge badge-soft-success px-2 py-1 font-11">Active</span></div>
                                            <div  className="col-12 ms-auto align-self-center"> </div>
                                            <div  className="col-12 ms-auto align-self-center">
                                                <h3  className="text-dark my-0 font-22 fw-bold">00:18</h3>
                                                <p  className="text-muted mb-0 fw-semibold">Avg.Sessions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="card overflow-hidden">
                                    <div  className="card-body">
                                        <div  className="row d-flex">
                                            <div  className="col-3"> </div>
                                            <div  className="col-12 ms-auto align-self-center"> </div>
                                            <div  className="col-12 ms-auto align-self-center">
                                                <h3  className="text-dark my-0 font-22 fw-bold">$2400</h3>
                                                <p  className="text-muted mb-0 fw-semibold">Bounce Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-3 col-md-6">
                                <div  className="card overflow-hidden">
                                    <div  className="card-body">
                                        <div  className="row d-flex">
                                            <div  className="col-3"> </div>
                                            <div  className="col-auto ms-auto align-self-center"><span  className="badge badge-soft-danger px-2 py-1 font-11">-2%</span></div>
                                            <div  className="col-12 ms-auto align-self-center"> </div>
                                            <div  className="col-12 ms-auto align-self-center">
                                                <h3  className="text-dark my-0 font-22 fw-bold">85000</h3>
                                                <p  className="text-muted mb-0 fw-semibold">Goal Completions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="row">
                            <div  className="col-12">
                                <div  className="card">
                                    <div  className="card-header">
                                        <div  className="row align-items-center">
                                            <div  className="col">
                                                <h4  className="card-title">Audience Overview</h4>
                                            </div>
                                            <div  className="col-auto">
                                                <div  className="dropdown"><a  className="btn btn-sm btn-outline-light dropdown-toggle" href="#" data-toggle="dropdown"> This Year </a>
                                                    <div  className="dropdown-menu dropdown-menu-end"><a  className="dropdown-item" href="#">Today</a> <a  className="dropdown-item" href="#">Last Week</a> <a  className="dropdown-item" href="#">Last Month</a> <a  className="dropdown-item" href="#">This Year</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="card-body"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div  className="col-lg-8">
                        <div  className="card">
                            <div  className="card-header">
                                <div  className="row align-items-center">
                                    <div  className="col">
                                        <h4  className="card-title">Browser Used &amp; Traffic Reports</h4>
                                    </div>
                                </div>
                            </div>
                            <div  className="card-body">
                                <div  className="table-responsive browser_users">
                                    <table  className="table table-hover mb-0">
                                        <thead  className="thead-light">
                                            <tr>
                                                <th  className="border-top-0">Browser</th>
                                                <th  className="border-top-0">Sessions</th>
                                                <th  className="border-top-0">Bounce Rate</th>
                                                <th  className="border-top-0">Transactions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img  className="me-2" src="assets/images/logos/chrome.png" alt="" height="20" />Chrome</td>
                                                <td>10853<small  className="text-muted">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566<small  className="text-muted">(92%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><img  className="me-2" src="assets/images/logos/micro-edge.png" alt="" height="20" />Microsoft Edge</td>
                                                <td>2545<small  className="text-muted">(47%)</small></td>
                                                <td>47.54%</td>
                                                <td>498<small  className="text-muted">(81%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><img  className="me-2" src="assets/images/logos/in-explorer.png" alt="" height="20" />Internet-Explorer</td>
                                                <td>1836<small  className="text-muted">(38%)</small></td>
                                                <td>41.12%</td>
                                                <td>455<small  className="text-muted">(74%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><img  className="me-2" src="assets/images/logos/opera.png" alt="" height="20" />Opera</td>
                                                <td>1958<small  className="text-muted">(31%)</small></td>
                                                <td>36.82%</td>
                                                <td>361<small  className="text-muted">(61%)</small></td>
                                            </tr>
                                            <tr>
                                                <td><img  className="me-2" src="assets/images/logos/chrome.png" alt="" height="20" />Chrome</td>
                                                <td>10853<small  className="text-muted">(52%)</small></td>
                                                <td>52.80%</td>
                                                <td>566<small  className="text-muted">(92%)</small></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div  className="card">
                            <div  className="card-header">
                                <div  className="row align-items-center">
                                    <div  className="col">
                                        <h4  className="card-title">Browser Used &amp; Traffic Reports</h4>
                                    </div>
                                </div>
                            </div>
                            <div  className="card-body">
                                <div  className="table-responsive browser_users">
                                    <table  className="table mb-0">
                                        <thead  className="thead-light">
                                            <tr>
                                                <th  className="border-top-0">Channel</th>
                                                <th  className="border-top-0">Sessions</th>
                                                <th  className="border-top-0">Prev.Period</th>
                                                <th  className="border-top-0">% Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a  className="text-primary" href="#">Organic search</a></td>
                                                <td>10853<small  className="text-muted">(52%)</small></td>
                                                <td>566<small  className="text-muted">(92%)</small></td>
                                                <td>52.80%</td>
                                            </tr>
                                            <tr>
                                                <td><a  className="text-primary" href="#">Direct</a></td>
                                                <td>2545<small  className="text-muted">(47%)</small></td>
                                                <td>498<small  className="text-muted">(81%)</small></td>
                                                <td>-17.20%</td>
                                            </tr>
                                            <tr>
                                                <td><a  className="text-primary" href="#">Referal</a></td>
                                                <td>1836<small  className="text-muted">(38%)</small></td>
                                                <td>455<small  className="text-muted">(74%)</small></td>
                                                <td>41.12%</td>
                                            </tr>
                                            <tr>
                                                <td><a  className="text-primary" href="#">Email</a></td>
                                                <td>1958<small  className="text-muted">(31%)</small></td>
                                                <td>361<small  className="text-muted">(61%)</small></td>
                                                <td>-8.24%</td>
                                            </tr>
                                            <tr>
                                                <td><a  className="text-primary" href="#">Social</a></td>
                                                <td>1566<small  className="text-muted">(26%)</small></td>
                                                <td>299<small  className="text-muted">(49%)</small></td>
                                                <td>29.33%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4">
                        <div  className="card">
                            <div  className="card-header">
                                <div  className="row align-items-center">
                                    <div  className="col">
                                        <h4  className="card-title">Sessions Device</h4>
                                    </div>
                                    <div  className="col-auto">
                                        <div  className="dropdown"><a  className="btn btn-sm btn-outline-light dropdown-toggle" href="#" data-bs-toggle="dropdown"> All </a>
                                            <div  className="dropdown-menu dropdown-menu-end"><a  className="dropdown-item" href="#">Purchases</a> <a  className="dropdown-item" href="#">Emails</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="card-body">
                                <div  className="text-center">
                                    <div id="ana_device"  className="apex-charts"> </div>
                                    <h6  className="bg-light-alt py-3 px-2 mb-0">01 January 2020 to 31 December 2020</h6>
                                </div>
                                <div  className="table-responsive mt-2">
                                    <table  className="table border-dashed mb-0">
                                        <thead>
                                            <tr>
                                                <th>Device</th>
                                                <th  className="text-end">Sassions</th>
                                                <th  className="text-end">Day</th>
                                                <th  className="text-end">Week</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dasktops</td>
                                                <td  className="text-end">1843</td>
                                                <td  className="text-end">-3</td>
                                                <td  className="text-end">-12</td>
                                            </tr>
                                            <tr>
                                                <td>Tablets</td>
                                                <td  className="text-end">2543</td>
                                                <td  className="text-end">-5</td>
                                                <td  className="text-end">-2</td>
                                            </tr>
                                            <tr>
                                                <td>Mobiles</td>
                                                <td  className="text-end">3654</td>
                                                <td  className="text-end">-5</td>
                                                <td  className="text-end">-6</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div  className="card">
                            <div  className="card-body">
                                <div  className="d-flex">
                                    <h3  className="m-0 align-self-center fw-bold font-22">80</h3>
                                    <div  className="d-block ms-3 align-self-center"><span  className="badge bg-soft-primary px-2 py-1 font-11">Right now</span>
                                        <h5  className="my-2">Traffic Sources</h5>
                                        <p  className="mb-2 text-muted">It is a long established fact that a reader will be of a page when looking at its layout.</p>
                                        <a  className="btn btn-primary" href="#">Read More </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="Appearance" class="offcanvas offcanvas-end" tabindex="-1">
                <div class="offcanvas-header border-bottom">
                    <h5 id="AppearanceLabel" class="m-0 font-14">Appearance</h5>
                    <button class="btn-close text-reset p-0 m-0 align-self-center" type="button" data-bs-dismiss="offcanvas"></button></div>
                <div class="offcanvas-body">
                    <h6>Account Settings</h6>
                    <div class="p-2 text-start mt-3">
                        <div class="form-check form-switch mb-2"><input id="settings-switch1" class="form-check-input" type="checkbox" /> <label class="form-check-label" for="settings-switch1">Auto updates</label></div>
                        <div class="form-check form-switch mb-2"><input id="settings-switch2" class="form-check-input" checked="checked" type="checkbox" /> <label class="form-check-label" for="settings-switch2">Location Permission</label></div>
                        <div class="form-check form-switch"><input id="settings-switch3" class="form-check-input" type="checkbox" /> <label class="form-check-label" for="settings-switch3">Show offline Contacts</label></div>
                    </div>
                    <h6>General Settings</h6>
                    <div class="p-2 text-start mt-3">
                        <div class="form-check form-switch mb-2"><input id="settings-switch4" class="form-check-input" type="checkbox" /> <label class="form-check-label" for="settings-switch4">Show me Online</label></div>
                        <div class="form-check form-switch mb-2"><input id="settings-switch5" class="form-check-input" checked="checked" type="checkbox" /> <label class="form-check-label" for="settings-switch5">Status visible to all</label></div>
                        <div class="form-check form-switch"><input id="settings-switch6" class="form-check-input" type="checkbox" /> <label class="form-check-label" for="settings-switch6">Notifications Popup</label></div>
                    </div>
                </div>
            </div>


        </>
    )
}
