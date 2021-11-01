import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, IconLogo, HeaderContainer } from './style';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin, goToPost } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import iconlogo from '../../assets/upicon.png'
import logo from '../../assets/logo.png'





const Header = () => {
  const token = localStorage.getItem("token")
  const history = useHistory()


  
  const rightButtonText = token ? "Logout" : "Login"

  const logout = () => {
    localStorage.removeItem("token")
  }



  const rightButtonAction = () => {

    if (token) {
      logout()      
      goToLogin(history)
    } else {
      goToLogin(history)
    }

  }


  return (

    <AppBar position="static">
      <StyledToolbar>
        <Button
          onClick={() => goToFeed(history)}
          color={"inherit"}>
          <IconLogo src={logo} />
        </Button>

        <HeaderContainer>

          <Button
            onClick={() => goToPost(history)}
            color={"inherit"}>
            Up Post
            <IconLogo src={iconlogo} />
          </Button>
        </HeaderContainer>

        <Button
          onClick={rightButtonAction}
          color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolbar>
    </AppBar>

  );
}
export default Header