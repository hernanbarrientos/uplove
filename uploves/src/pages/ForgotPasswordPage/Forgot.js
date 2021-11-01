import React, { useState } from 'react'
import {
    ScreenContainer,
    LogoImage,
    InputsContainer,
    SignUpButtonContainer,

} from './style'
import logo from "../../assets/upicon.png"
import { TextField, Button } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { useHistory } from 'react-router'
import { goToSignUp } from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { CircularProgress } from '@material-ui/core'



const Forgot = () => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "" })
    const [isLoading, setIsLoading] = useState(false)


    const onSubmitForgot = (event) => {
        event.preventDefault()
        recuperarSenha()
        setIsLoading(true)

    }

    const recuperarSenha = () => {

        axios.get(`${BASE_URL}/forgot-password/${form.username}`)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    if (window.confirm(`Sua senha é: ${res.data.password}`)) {
                        history.push("/login")
                    }
                    setIsLoading(false)
                    clear()
                } else {
                    alert("Você não possui conta ainda, cadastre-se")
                    setIsLoading(false)
                    clear()
                    history.push("/cadastro")
                }
            })
            .catch((err) => {
                clear()
                setIsLoading(false)

            })

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
                        label={"usuario"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"text"}
                    />


                    <Button

                        className="button"
                        color={"primary"}
                        fullWidth
                        type={"submit"}
                        variant={"contained"}
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <> Recuperar senha </>}
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

