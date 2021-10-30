import React from 'react'
import {
    ScreenContainer,
    LogoImage,
    InputsContainer,
    SignUpButtonContainer
} from './style'
import logo from "../../assets/upicon.png"
import { TextField, Button } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { useHistory, useParams } from 'react-router'
import {goToForgot, goToSignUp} from '../../routes/coordinator'
import axios from 'axios'
import {BASE_URL} from "../../constants/urls"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const Forgot = () => {
    useUnprotectedPage()
    const params = useParams()
    console.log(params)


    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: ""})

    const onSubmitForgot = (event) => {
        event.preventDefault()
        recuperarSenha()

    }
    

    const recuperarSenha = () => {
        axios.get(`${BASE_URL}/forgot-password/{usename}`)
        .then((res)=>{ console.log(res)
            goToForgot(history, form)
            // clear()
            // history.push("/feed")
             
        })
        .catch((err)=> alert("Ops, tente novamente!"))

    }

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForgot}>
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
                   

                    <Button

                        className="button"
                        color={"primary"}
                        fullWidth
                        type={"submit"}
                        variant={"contained"}


                    >
                        Recuperar senha
                    </Button>

                </form>
            </InputsContainer>

            <SignUpButtonContainer>
            


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
export default Forgot

