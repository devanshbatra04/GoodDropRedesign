import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onLogIn } from "../actions/index";

class Auth extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);
        this.state = {
            MobileNo: this.props.MobileNo,
            Password: this.props.password,
            isLoggedIn: this.props.isLoggedIn
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.onInputChangeMobile = this.onInputChangeMobile.bind(this);
        this.onInputChangePassword = this.onInputChangePassword.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChangeMobile(event){
        this.setState({MobileNo: event.target.value});
    }
    onInputChangePassword(event){
        this.setState({Password: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.onLogIn(this.state.MobileNo, this.state.Password);
        this.setState({isLoggedIn: true}, () => {
            console.log(this.state);
        });
    }

    render(){
        if (!this.state.isLoggedIn)
        return (
            <div className="loginForm">
                <form onSubmit={this.onFormSubmit} className="form-inline">
                    <input
                        placeholder="Mobile Number"
                        className="form-control"
                        value={this.state.MobileNo}
                        onChange={this.onInputChangeMobile}
                        type="text"/>
                    <input
                        placeholder="Password"
                        className="form-control"
                        value={this.state.Password}
                        onChange={this.onInputChangePassword}
                        type="password"/>
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                </form>
            </div>
        );
        else return (
            <div>logged in</div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({onLogIn}, dispatch);
}


function mapStateToProps (state) {
    //Whatever is returned, shows up as props inside book-list
    console.log(state);
    return {
        MobileNo: state.loginDetails.phoneNo,
        isLoggedIn: state.loginDetails.isLoggedIn,
        password: ''
    };
}
export default connect(mapStateToProps, mapDispatchToProps) (Auth);
