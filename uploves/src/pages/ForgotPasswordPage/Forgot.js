import React, {useState} from 'react'
import {
    ScreenContainer,
    LogoImage,
    InputsContainer,
    SignUpButtonContainer,
    ModalFrame,
    ModalContent
} from './style'
import logo from "../../assets/upicon.png"
import { TextField, Button } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { useHistory } from 'react-router'
import { goToSignUp } from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const Forgot = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "" })
    

    const onSubmitForgot = (event) => {
        event.preventDefault()
        recuperarSenha()

    }

    const recuperarSenha = () => {

        axios.get(`${BASE_URL}/forgot-password/${form.username}`)
            .then((res) => { console.log(res)
                alert(JSON.stringify(res.data))
                clear()
            })
            .catch((err) => alert("Você não possui conta ainda, cadastre-se"))

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

