import React from 'react'
import {Link} from 'react-router-dom'
export default function Reports() {
    
    console.log('component Doc loaded')
    return (
        <>
          <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Unikit</Link>
                                        </li>{/*end nav-item*/}
                                        <li className="breadcrumb-item"><a href="#">Analytics</a>
                                        </li>{/*end nav-item*/}
                                        <li className="breadcrumb-item active">Reports</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Reports</h4>
                            </div>{/*end page-title-box*/}
                        </div>{/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body"> 
                                    <div className="media">
                                        <img src="assets/images/flags/us_flag.jpg" className="me-3 thumb-md align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center"> 
                                            <div className="coin-bal">                                                        
                                                <h4 className="mt-0 mb-1 font-22 fw-bold">50,289</h4>
                                                <p className="text-muted mb-0 fw-semibold">USA . Last Month
                                                    <span className="text-success">2.5% <i className="mdi mdi-arrow-up"></i></span>
                                                </p>
                                            </div>                                                                                              
                                        </div>{/*end media body*/}
                                    </div>{/*end media*/}
                                </div>{/*end card-body*/} 
                            </div>{/*end card*/}
                        </div>{/*end col*/}     
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body"> 
                                    <div className="media">
                                        <img src="assets/images/flags/germany_flag.jpg" className="me-3 thumb-md align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center"> 
                                            <div className="coin-bal">                                                        
                                                <h4 className="mt-0 mb-1 font-22 fw-bold">50,289</h4>
                                                <p className="text-muted mb-0 fw-semibold">Germany . Last Month
                                                    <span className="text-success">1.2% <i className="mdi mdi-arrow-up"></i></span>
                                                </p>
                                            </div>                                                                                              
                                        </div>{/*end media body*/}
                                    </div>{/*end media*/}
                                </div>{/*end card-body*/} 
                            </div>{/*end card*/}
                        </div>{/*end col*/}       
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body"> 
                                    <div className="media">
                                        <img src="assets/images/flags/spain_flag.jpg" className="me-3 thumb-md align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center"> 
                                            <div className="coin-bal">                                                        
                                                <h4 className="mt-0 mb-1 font-22 fw-bold">50,289</h4>
                                                <p className="text-muted mb-0 fw-semibold">Spain . Last Month
                                                    <span className="text-success">0.5% <i className="mdi mdi-arrow-up"></i></span>
                                                </p>
                                            </div>                                                                                              
                                        </div>{/*end media body*/}
                                    </div>{/*end media*/}
                                </div>{/*end card-body*/} 
                            </div>{/*end card*/}
                        </div>{/*end col*/}                                          
                    </div>{/*end row*/}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">                      
                                            <h4 className="card-title">Visitors By country</h4>                      
                                        </div>{/*end col*/}
                                    </div>  {/*end row*/}                                  
                                </div>{/*end card-header*/}
                                <div className="card-body position-reletive">
                                   <img src="assets/images/small/svg-map.svg" alt="" className="img-fluid" />
                                   <div className="country-reports country-ind">
                                        <span className="shadow-sm bg-card p-1 country-data">India / 2201</span>
                                   </div>
                                   <div className="country-reports country-usa">
                                        <span className="shadow-sm bg-card p-1 country-data">USA / 3201</span>
                                    </div>
                                </div>{/*end card-body*/} 
                            </div>{/*end card*/} 
                        </div> {/*end col*/}   
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">                      
                                            <h4 className="card-title">Live Visits Our New Site / Traffic Sources</h4>                      
                                        </div>{/*end col*/}
                                    </div>  {/*end row*/}                                  
                                </div>{/*end card-header*/}
                                <div className="card-body">                                    
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div id="circlechart" className="apex-charts"></div>
                                        </div>{/*end col*/}
                                        <div className="col-lg-6 col-md-6 align-self-center">                                          
                                            <h4 className="font-22 fw-bold">80</h4>
                                            <h6 className="text-muted">Right Now</h6>
                                            <div className="progress mb-3 rounded">                                                    
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                                                <div className="progress-bar bg-secondary" role="progressbar" style={{width: '28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">28%</div>
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '17%'}} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100">17%</div>
                                            </div>                
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-item mb-2">
                                                    <i className="mdi mdi-circle-medium text-primary"></i>
                                                    <span className="fw-semibold">Organic</span>                                                                                                      
                                                </li>
                                                <li className="list-item mb-2">
                                                    <i className="mdi mdi-circle-medium text-secondary"></i> 
                                                    <span className="fw-semibold">Direct</span>                                              
                                                </li>
                                                <li className="list-item">
                                                    <i className="mdi mdi-circle-medium text-warning"></i>
                                                    <span className="fw-semibold">Campaign</span>                                                 
                                                </li>                                                
                                            </ul>
                                        </div>{/*end col*/}
                                    </div>{/*end row*/}
                                    <div className="text-center mt-4">
                                        <h6 className="text-primary bg-soft-primary p-3 mb-0 font-14 rounded">
                                            <i className="ti ti-calendar align-self-center mr-1"></i>
                                            01 Jan 2022 to 31 Jun 2022
                                        </h6>
                                    </div>                                     
                               </div>{/*end card-body*/} 
                            </div>{/*end card*/}                             
                        </div> {/*end col*/}        
                    </div>{/*end row*/}
                    
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">                      
                                            <h4 className="card-title">Social Report</h4>                      
                                        </div>{/*end col*/}
                                    </div>  {/*end row*/}                                  
                                </div>{/*end card-header*/}
                                <div className="card-body">                                    
                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>Network</th>
                                                <th>Sessions</th>
                                                <th>Con.Rate</th>                                                    
                                                <th>Avg.Time</th>
                                                <th>Bounce Rate</th>
                                                <th>%Change</th>
                                            </tr>{/*end tr*/}
                                            </thead>
        
                                            <tbody>
                                            <tr>
                                                <td><i className="mdi mdi-google text-danger me-1 font-22"></i>Google</td>
                                                <td>4541</td>
                                                <td>3.2%</td>
                                                <td>3:20</td>
                                                <td>57.8%</td>
                                                <td>17.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-yahoo text-blue me-1 font-22"></i>Yahoo</td>
                                                <td>1522</td>
                                                <td>4.2%</td>
                                                <td>4:20</td>
                                                <td>62.8%</td>
                                                <td>-12.8% <i className="mdi mdi-arrow-down-drop-circle-outline text-danger ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-web text-pink me-1 font-22"></i>UC Browser</td>
                                                <td>1292</td>
                                                <td>3.2%</td>
                                                <td>5:20</td>
                                                <td>33.8%</td>
                                                <td>17.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-facebook text-primary me-1 font-22"></i>Facebook</td>
                                                <td>2241</td>
                                                <td>4.9%</td>
                                                <td>2:20</td>
                                                <td>48.8%</td>
                                                <td>17.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-twitter text-info me-1 font-22"></i>Twitter</td>
                                                <td>6806</td>
                                                <td>3.2%</td>
                                                <td>3:20</td>
                                                <td>57.8%</td>
                                                <td>-11.8% <i className="mdi mdi-arrow-down-drop-circle-outline text-danger ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-linkedin text-info me-1 font-22"></i>LinkedIn</td>
                                                <td>4541</td>
                                                <td>3.2%</td>
                                                <td>3:20</td>
                                                <td>52.8%</td>
                                                <td>17.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-pinterest text-pink me-1 font-22"></i>Pinterest</td>
                                                <td>3542</td>
                                                <td>8.2%</td>
                                                <td>6:20</td>
                                                <td>61.8%</td>
                                                <td>23.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-google-plus text-danger me-1 font-22"></i>Google+</td>
                                                <td>1124</td>
                                                <td>9.2%</td>
                                                <td>4:10</td>
                                                <td>20.8%</td>
                                                <td>-9.8% <i className="mdi mdi-arrow-down-drop-circle-outline text-danger ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-instagram text-success me-1 font-22"></i>Instagram</td>
                                                <td>3521</td>
                                                <td>1.2%</td>
                                                <td>6:45</td>
                                                <td>66.2%</td>
                                                <td>34.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-whatsapp text-success me-1 font-22"></i>WhatsApp</td>
                                                <td>96547</td>
                                                <td>9.2%</td>
                                                <td>1:20</td>
                                                <td>57.8%</td>
                                                <td>48.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                            <tr>
                                                <td><i className="mdi mdi-google-play text-warning me-1 font-22"></i>Other</td>
                                                <td>3214</td>
                                                <td>6.2%</td>
                                                <td>4:40</td>
                                                <td>36.8%</td>
                                                <td>11.8% <i className="mdi mdi-arrow-up-drop-circle-outline text-success ml-1"></i></td>
                                            </tr>{/*end tr*/}
                                                                                            
                                            </tbody>
                                        </table>                    
                                    </div>                                         
                                </div>{/*end card-body*/} 
                            </div>{/*end card*/} 
                        </div> {/*end col*/}                               
                    </div>{/*end row*/} 

                </div>{/* container */}

        </>
    )
}
