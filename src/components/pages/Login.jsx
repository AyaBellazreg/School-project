import React from 'react';
import './login.css'

function Login() {
    return (
        <div className="form login">
        <form>
            <div>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="username" />
                </label>
            </div>
            <input type="submit" value="Submit" className="btn btn-red" />
            </form>
        </div>
    )
}
export default Login;
