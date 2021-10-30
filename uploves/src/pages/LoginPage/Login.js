import React from 'react'
import {
    ScreenContainer,
    LogoImage,
    InputsContainer,
    SignUpButtonContainer
} from './style'
import logo from "../../assets/logo.png"
import { TextField, Button} from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { useHistory } from 'react-router'
import {goToForgot, goToSignUp} from '../../routes/coordinator'
import axios from 'axios'
import {BASE_URL} from "../../constants/urls"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const Login = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "", password: "" })

    const onSubmitLogin = (event) => {
        event.preventDefault()
        signIn()

    }

    const signIn = () => {
        axios.post(`${BASE_URL}/sign-in`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data)
            clear()
            history.push("/feed")
             
        })
        .catch((err)=> alert("Ops, tente novamente!"))

    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitLogin}>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"password"}
                    />

                    <Button

                        className="button"
                        color={"primary"}
                        fullWidth
                        type={"submit"}
                        variant={"contained"}


                    >
                        Entrar
                    </Button>

                </form>
            </InputsContainer>

            <SignUpButtonContainer>

            <Button
                    className="button-forgot"
                    color={"primary"}
                    fullWidth
                    onClick={() => goToForgot(history)}
                    type={"submit"}
                    >
                    <h6>Esqueceu a senha? Clique aqui</h6>
                </Button>
            


                <Button
                    className="button"
                    color={"primary"}
                    fullWidth
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    variant={"text"}>
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )


}
export default Login