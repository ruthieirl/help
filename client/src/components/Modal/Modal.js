import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Login/LoginForm'
import SignupForm from '../Signup/SignupForm'
import logo from '../../media/happy-trash-fire.png';
import styles from './styles.module.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpened: true
        }

        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
        this.setState({ modalOpened: !this.state.modalOpened })
    }


    render() {
        const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover'
        const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div>
                <div className={containerClass}>
                    <div className='modal-header'>
                        <img className="newLogo" src={logo} alt="Logo" height="60px" width="60px" />
                            <h1 className='modal-title'> HELP! </h1>
                    
                                <button className="btn btn-lg btn-danger" onClick={this.modalToggle}>X</button></div>
                            <div className='modal-body'></div>
                                <div className='container'>
                                    <p className='modal-p'> <strong> Welcome to Help! </strong> </p>
                                    <br />
                                    <p className='modal-p'> <strong> Don't have an Account? </strong> </p>
                                    <p className='modal-p'> <strong> Click the Sign Up button below </strong> </p>
                                    <div className="col-sm-12">
                                        <button className="btn btn-lg btn-block modal-btns text-center"> Sign Up </button> 
                                    </div>
                                </div>
                                <br />
                                <div className='container'>
                                    <p className='modal-p'> <strong> Already have an Account? </strong> </p>
                                    <p className='modal-p'> <strong> Click the Login button below </strong> </p>
                                    <div className="col-sm-12">
                                        <button className="btn btn-lg btn-block modal-btns text-center"> Login </button> 
                                    </div>
                                    </div>
                                <div className='modal-footer' />
                </div>

                <div className={coverClass}></div>
            </div>
        )
    }
}

export default Modal