import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

    }
    onInputChange(event){
        this.setState({term: event.target.value});
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
                    placeholder="get a five day forecast in your favourite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}