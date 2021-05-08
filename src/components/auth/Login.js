import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    history.push("/characters")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button-login" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <div>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Welcome to the Tavern!</h1>
                    <h2>Please register or sign in:</h2>
                    <div className="email-container">
                        <label htmlFor="inputEmail"> Email:</label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </div>
                    <div className="button-container">
                        <button className="button-login" type="submit">
                            Sign in
                        </button>
                   
                        <Link to="/register">
                            <button className="button-login">
                                Register
                        </button></Link>
                    </div>
                </form>
            </div>

        </main>
    )
}

