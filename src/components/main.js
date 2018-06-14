import React from 'react';

const Main = (props) => {
    return (
        <section className="container">
            <h3>Bike Shipping is easy with us in 3 simple steps</h3>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">STEP 01</h5>
                            <div className="icon">
                                <i className="fab fa-github-square fa-9x"></i>
                            </div>
                            <p className="card-text">Enter bike shipping details</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">STEP 02</h5>
                            <div className="icon">
                                <i className="fab fa-github-square fa-9x"></i>
                            </div>
                            <p className="card-text">Hand over the keys to Gooddrop executives</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">STEP 03</h5>
                            <div className="icon">
                                <i className="fab fa-github-square fa-9x"></i>
                            </div>
                            <p className="card-text">Get your bike at your destination</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Main;