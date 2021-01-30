import React, { useContext } from "react"
import {Switch, Route, Redirect } from "react-router-dom"
import { Public } from "./components/Public"
import { Profile } from "./components/Profile"
import { Current } from "./components/Current"
import { Prior } from "./components/Prior"
import { Navbar } from "./components/Navbar"
import { ProtectedRoute } from "./components/authentication/ProtectedRoute"
import { Auth } from "./components/authentication/Auth"
import { UserContext } from "./components/context/UserProvider"

export const App = () => {
  const { token, logout } = useContext(UserContext)

  return(
    <>
      {/* 
      <div>
        <Public />
      </div>      
      {/* 
      <div>
        <Profile? IDK NOT SURE/>
      </div>
      <div>
        <Current />
      </div>
      <div>
        <Prior />
      </div> */}
      <Public />
      <div>
      { token && <Navbar logout={ logout }/> }
        <Switch>
          <Route
            exact path="/"
            render={() => token ? <Redirect to="/profile"/> : <Auth/>}
          />
          <ProtectedRoute
            path="/about"
            component={Public}
            redirectTo="/"
            token={token}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            redirectTo="/"
            token={token}
          />
        </Switch>
    </div>
    </>
  )
}
