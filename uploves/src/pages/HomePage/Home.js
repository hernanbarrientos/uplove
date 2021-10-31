import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './style'
import logo from "../../assets/logo.png"
import { Button } from '@material-ui/core'
import { goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const Home = () => {
    useUnprotectedPage()
    const history = useHistory()


    return (


        <ScreenContainer>
            <LogoImage src={logo} alt="Logo UpLoves" />
            <h1>Seja bem vindo</h1>
            <p>Acompanhe nosso feed e fique ligado nas novidades!!!</p>

            <SignUpButtonContainer>
                <Button
                    className="button"
                    color={"primary"}
                    fullWidth
                    type={"submit"}
                    variant={"contained"}
                    onClick={() => goToLogin(history)}
                >
                    Entrar
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>




    )


}
export default Home