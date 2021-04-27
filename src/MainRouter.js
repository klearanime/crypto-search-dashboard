import React from 'react'
import { Switch, Route } from "react-router-dom"
const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));


function MainRouter() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}



export default MainRouter
