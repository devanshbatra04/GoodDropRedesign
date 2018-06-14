import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MobileNo: '',
            Password: ''
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.onInputChangeMobile = this.onInputChangeMobile.bind(this);
        this.onInputChangePassword = this.onInputChangePassword.bind(this);
    }
    onInputChangeMobile(event){
        this.setState({MobileNo: event.target.value});
    }
    onInputChangePassword(event){
        this.setState({Password: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Mobile Number"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChangeMobile}
                    type="text"/>
                <input
                    placeholder="Password"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChangePassword}
                    type="password"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchWeather}, dispatch);
// }

export default connect(null, null) (Header);
