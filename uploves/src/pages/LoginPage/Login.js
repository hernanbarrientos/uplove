import React, {useState} from 'react'
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
import { CircularProgress } from '@material-ui/core'



const Login = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const refresh = () =>{
        window.location.reload()
    } 

    const onSubmitLogin = (event) => {
        event.preventDefault()
        signIn()
        setIsLoading(true)

    }

    const signIn = () => {
        axios.post(`${BASE_URL}/sign-in`, form)
        .then((res)=>{
            
            localStorage.setItem("token", res.data)
            clear()
            setIsLoading(false)
            refresh()
            history.push("/feed")
            
                         
        })
        .catch((err)=> {
            alert("Ops, tente novamente!")
            clear()
            setIsLoading(false)
        })

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
                        label={"Usuário"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
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
                      {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Entrar </> }
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
                    <h6> {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Esqueceu a senha? Clique aqui </> }</h6>
                </Button>
            


                <Button
                    className="button"
                    color={"primary"}
                    fullWidth
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    variant={"text"}>
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Não possui conta? Cadastre-se </> }
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )


}
export default Login