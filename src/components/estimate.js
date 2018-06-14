import React from 'react';
import Auth from '../containers/Auth'

const Estimate = (props) => {

    return (
        <section className="Estimate">
            <div className="container">
                <div className="estimate-label">
                    Bike Shipping Through Railways Got Convenient and Easy
                </div>
                <figure className="bikeImg">
                    <img src="../../images/Bike.png" alt="The Pulpit Rock" width="304" height="228"/>
                </figure>
                <div className="estimate-form">
                    <form className="form-inline" action="#">
                        <div className="form-group">
                            SELECT
                            {/*<select className="custom-select">*/}
                                {/*<option selected>Open this select menu</option>*/}
                                {/*<option value="1">One</option>*/}
                                {/*<option value="2">Two</option>*/}
                                {/*<option value="3">Three</option>*/}
                            {/*</select>*/}

                        </div>
                        <div className="form-group">
                            SELECT
                            {/*<select className="custom-select" value="Your Parcel Details">*/}
                                {/*<option selected>Open this select menu</option>*/}
                                {/*<option value="1">One</option>*/}
                                {/*<option value="2">Two</option>*/}
                                {/*<option value="3">Three</option>*/}
                            {/*</select>*/}
                        </div>
                        <span className="Button">
                            <a href="#">
                                <button className="RedButton">
                                    PRICE ESTIMATE
                                </button>
                            </a>
                        </span>
                    </form>
                </div>
            </div>

        </section>
    )
};

export default Estimate;