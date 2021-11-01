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
import useProtectedPage from '../../hooks/useProtectedPage'


const Post = () => {
    useProtectedPage()
    const token = localStorage.getItem("token")

    const history = useHistory()
    
    const [form, onChange, clear] = useForm({ content: ""})

    const onSubmitCadastro = (event) => {
        event.preventDefault()
        createPost()

    }

    const createPost = () => {
        axios.post(`${BASE_URL}/feed`,form, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        } )
        .then((res)=> {            
            clear()
           if( window.confirm('Mensagem criada com sucesso! Deseja voltar ao Feed?')) {
            history.push("/feed") 
           }
                   
        })
        
        .catch((err)=>{
            alert(`Ocorreu um erro com sua mensagem e ela não foi enviada`)
            clear()
        })

    }    
    


    return (
        <ScreenContainer>
        <LogoImage src={logo} />
        <h2>Bora postar?</h2>
        <p>Milhares de pessoas estão aguardando para ler sua mensagem</p>
        <InputsContainer>
            <form onSubmit={onSubmitCadastro}>
                <TextField
                    
                    name={"content"}
                    value={form.content}
                    onChange={onChange}
                    label={"Escreva sua Mensagem"}
                    variant={"outlined"}
                    fullWidth
                    multiline
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
                    Enviar
                </Button>

            </form>
        </InputsContainer>

       
    </ScreenContainer>
)




}
export default Post