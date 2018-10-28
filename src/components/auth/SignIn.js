import React, { Component } from 'react';
import {signIn} from '../../store/actions/authActions'
import {connect } from 'react-redux'

class SignIn extends Component {

    state ={
        email: "",
        password: ""
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.signIn(this.state)
    }
    

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Sign in
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {this.props.authError ? <p>{this.props.authError}</p>  : null }
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError
    }
}

const matchDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
