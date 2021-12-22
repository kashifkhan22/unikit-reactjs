import React from 'react'

export default function Customers() {
    console.log('component home loaded')
    return (
        <>
          <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Unikit</a>
                                        </li>{/*end nav-item*/}
                                        <li className="breadcrumb-item"><a href="#">Analytics</a>
                                        </li>{/*end nav-item*/}
                                        <li className="breadcrumb-item active">Customers</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Customers</h4>
                            </div>{/*end page-title-box*/}
                        </div>{/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">                      
                                            <h4 className="card-title">Customers Growth</h4>                      
                                        </div>{/*end col*/}
                                    </div>  {/*end row*/}                                  
                                </div>{/*end card-header*/}
                                <div className="card-body">
                                    <div className="chart-demo">
                                        <div id="apex_line1" className="apex-charts"></div>
                                    </div>                                        
                                </div>{/*end card-body*/}
                            </div>{/*end card*/}
                        </div>{/*end col*/}
                    </div>{/*end row*/}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card"> 
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <h6 className="font-15 m-0 mb-1">Returning Customers</h6>
                                            <p className="text-muted mb-0">Last Month : 150 <i className="mdi mdi-menu-up text-success"></i></p>
                                        </div>{/*end col*/}  
                                        <div className="col-auto align-self-center">                                              
                                            <div className="">
                                                <div id="bar-1" className="apex-charts mb-n4"></div>
                                            </div>
                                        </div>{/*end col*/}                                      
                                    </div>{/*end row*/}                                                                                                                                  
                                </div>{/*end card-body*/}                                
                            </div>{/*end card*/}  
                        </div>{/*end col*/} 
                        
                        <div className="col-md-4">
                            <div className="card"> 
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <h6 className="font-15 m-0 mb-1">New Customers</h6>
                                            <p className="text-muted mb-0">Last Month : 10 <i className="mdi mdi-menu-down text-danger"></i></p>
                                        </div>{/*end col*/}  
                                        <div className="col-auto align-self-center">                                              
                                            <div className="">
                                                <div id="line-1" className="apex-charts"></div>
                                            </div>
                                        </div>{/*end col*/}                                      
                                    </div>{/*end row*/}                                                                                                                                  
                                </div>{/*end card-body*/}                                
                            </div>{/*end card*/}  
                        </div>{/*end col*/} 
                        <div className="col-md-4">
                            <div className="card"> 
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <h6 className="font-15 m-0 mb-1">Bounce Rate</h6>
                                            <p className="text-muted mb-0">Last Month : 50% <i className="mdi mdi-menu-up text-success"></i></p>
                                        </div>{/*end col*/}  
                                        <div className="col-auto align-self-center">                                              
                                            <div className="">
                                                <div id="radialBar-1" className="apex-charts my-n2"></div>
                                            </div>
                                        </div>{/*end col*/}                                      
                                    </div>{/*end row*/}                                                                                                                                  
                                </div>{/*end card-body*/}                                
                            </div>{/*end card*/}  
                        </div>{/*end col*/}
                    </div>{/*end row*/}    
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Customers Details </h4>
                                </div>{/*end card-header*/}
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table" id="datatable_1">
                                            <thead className="thead-light">
                                              <tr>
                                                <th>Name</th>
                                                <th>Ext.</th>
                                                <th>City</th>
                                                <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                                                <th>Completion</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Unity Pugh</td>
                                                    <td>9958</td>
                                                    <td>Curicó</td>
                                                    <td>2005/02/11</td>
                                                    <td>37%</td>
                                                </tr>
                                                <tr>
                                                    <td>Theodore Duran</td><td>8971</td><td>Dhanbad</td><td>1999/04/07</td><td>97%</td>
                                                </tr>
                                                <tr>
                                                    <td>Kylie Bishop</td><td>3147</td><td>Norman</td><td>2005/09/08</td><td>63%</td>
                                                </tr>
                                                <tr>
                                                    <td>Willow Gilliam</td><td>3497</td><td>Amqui</td><td>2009/29/11</td><td>30%</td>
                                                </tr>
                                                <tr>
                                                    <td>Blossom Dickerson</td><td>5018</td><td>Kempten</td><td>2006/11/09</td><td>17%</td>
                                                </tr>
                                                <tr>
                                                    <td>Elliott Snyder</td><td>3925</td><td>Enines</td><td>2006/03/08</td><td>57%</td>
                                                </tr>
                                                <tr>
                                                    <td>Castor Pugh</td><td>9488</td><td>Neath</td><td>2014/23/12</td><td>93%</td>
                                                </tr>
                                                <tr>
                                                    <td>Pearl Carlson</td><td>6231</td><td>Cobourg</td><td>2014/31/08</td><td>100%</td>
                                                </tr>
                                                <tr>
                                                    <td>Deirdre Bridges</td><td>1579</td><td>Eberswalde-Finow</td><td>2014/26/08</td><td>44%</td>
                                                </tr>
                                                <tr>
                                                    <td>Daniel Baldwin</td><td>6095</td><td>Moircy</td><td>2000/11/01</td><td>33%</td>
                                                </tr>  
                                                <tr>
                                                    <td>Pearl Carlson</td><td>6231</td><td>Cobourg</td><td>2014/31/08</td><td>100%</td>
                                                </tr>                                                                                        
                                            </tbody>
                                          </table>
                                    </div>
                                </div>
                            </div>
                        </div> {/* end col */}
                    </div> {/* end row */}
                </div>{/* container */}

        </>
    )
}
