import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'
import { NavBar } from './nav/NavBar'
import { Footer } from './nav/Footer'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { ApplicationViews } from './ApplicationViews'
import { userStorageKey } from './components/auth/authSettings'


export const App = () => (
  <>

    <HashRouter basename="/">
      <Route
        render={() => {
          if (sessionStorage.getItem(userStorageKey)) {
            return (
              <>
                <NavBar />
                <div className="applicationView">
                  <ApplicationViews />
                </div>
                <div>
                  <Footer />
                </div>
              </>
            )
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </HashRouter>
  </>
)
