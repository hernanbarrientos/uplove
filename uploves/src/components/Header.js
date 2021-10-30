import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, IconLogo, HeaderContainer } from './style';
import Button from '@material-ui/core/Button';
import { goToHome, goToLogin } from '../routes/coordinator'
import { useHistory } from 'react-router'
import iconlogo from '../assets/upicon.png'
import logo from '../assets/logo.png'





const Header = () =>  {
    const history = useHistory()
        

    const logout = () => {
      localStorage.removeItem("token")
    }

  
  return (
    
      <AppBar position="static">
        <StyledToolbar>          
          <Button 
          onClick={() => goToHome(history)}
          color={"inherit"}>
          <IconLogo src={logo} />
          
          </Button>
          
          <HeaderContainer>
            
            
            <h2>UpLoves</h2>
            <IconLogo src={iconlogo} />
          </HeaderContainer>
          

          
          <Button 
          onClick={() => goToLogin(history)}
          color="inherit">
              Login
          </Button>
        </StyledToolbar>
      </AppBar>
    
  );
}
export default Header