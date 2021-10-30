import React from 'react'
import {
    ScreenContainer,
    LogoImage,
    InputsContainer,
    
} from './style'
import logo from "../../assets/upicon.png"
import { TextField, Button } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'



const Cadastro = () => {
    useUnprotectedPage()

    const history = useHistory()
    
    const [form, onChange, clear] = useForm({ username: "", password: "" })

    const onSubmitCadastro = (event) => {
        event.preventDefault()
        signUp()

    }

    const signUp = () => {
        axios.post(`${BASE_URL}/sign-up`, form )
        .then((res)=> {
            clear()
            alert('Parabéns! Agora você já pode efetuar login e navegar')
            history.push("/login")        
        })
        
        .catch((err)=>{
            alert(`Ocorreu um erro com seu cadastro. Tente novamente mais tarde`)
            clear()
        })

    }    

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <h2>Efetue seu cadastro aqui!</h2>
            <p>É rápido, fácil e simples, como deve ser!</p>
            <InputsContainer>
                <form onSubmit={onSubmitCadastro}>
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
                        Cadastre-se
                    </Button>

                </form>
            </InputsContainer>

           
        </ScreenContainer>
    )


}

export default Cadastro