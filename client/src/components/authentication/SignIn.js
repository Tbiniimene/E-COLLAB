<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { userActions, alertActions } from '../../redux/actions/index'
import '../../assets/scss/style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../helpers/history'
=======
import React, { useState } from 'react'
import { userActions } from '../../redux/actions/index'
import '../../assets/scss/style.scss'
import { useSelector, useDispatch } from 'react-redux'
>>>>>>> 66adb6320efd054ca3537e34a7179b435e9ea035

const SignIn = function () {

    //Local state variables
    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })
    const [submitted, setSubmitted] = useState(false)
    //destructurinn varibales from input
    const { email, password } = inputs

    // Redux - getting the authentication.logginging variable
    const loggingIn = useSelector(state => state.authentication.loggingIn)
<<<<<<< HEAD
    const alert = useSelector(state => state.alert)
    // Setting up Redux dispatch hook 
    const dispatch = useDispatch()

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear())
        })
    }, [dispatch])

    //Handle change in inputs
    function handleChange(e) {
        
=======
    // Setting up Redux dispatch hook 
    const dispatch = useDispatch()

    //Handle change in inputs
    function handleChange(e) {
>>>>>>> 66adb6320efd054ca3537e34a7179b435e9ea035
        const { name, value } = e.target
        setInputs(inputs => ({ ...inputs, [name]: value }))
    }
    // handle form submission
   function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(true)

        if (email && password) {
            dispatch(userActions.login(email, password))
        }
    }

    

    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-bg">
                    <span className="r"/>
                    <span className="r s"/>
                    <span className="r s"/>
                    <span className="r"/>
                </div>
<<<<<<< HEAD
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                </div>
=======
>>>>>>> 66adb6320efd054ca3537e34a7179b435e9ea035
                <div className="card">
                    <form name="form" onSubmit={handleSubmit}>
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"/>
                        </div>
                        <h3 className="mb-4">Login</h3>
                        <div className="input-group mb-3">
                            <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={handleChange} 
                            className={'form-control' + (submitted && !password ? ' is-invalid' : '')} 
                            placeholder="email" 
                            />
                            {submitted && !email &&
                                <div className="invalid-feedback">Email is required</div>
                            }
                        </div>
                        <div className="input-group mb-4">
                            <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={handleChange} 
                            className={'form-control' + (submitted && !password ? ' is-invalid' : '')} 
                            placeholder="password" 
                            />
                            {submitted && !password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                    <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                {loggingIn ? <span className="spinner-border spinner-border-sm mr-1">Loading ... </span> : 'Sign In'}
                            </button>
                        </div>
                        <p className="mb-2 text-muted">Forgot password?</p>
                        <p className="mb-0 text-muted">Don’t have an account?</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
