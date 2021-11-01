import React from "react"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/HomePage/Home'
import Login from '../pages/LoginPage/Login'
import Feed from '../pages/FeedPage/Feed'
import Forgot from '../pages/ForgotPasswordPage/Forgot'
import SignUp from '../pages/SignUpPage/SignUp'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/header/Header';
import Post from '../pages/Post/Post'


const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
            <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login  />
                </Route>
                <Route exact path="/cadastro">
                    <SignUp />
                </Route>
                <Route exact path="/recuperar-senha/:id">
                    <Forgot />
                </Route>
                <Route exact path="/feed">
                    <Feed />
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch> 
        </BrowserRouter>
        
    )
}
export default Router