import React from 'react'
import {ErrorPageContainer, ErrorImage} from "./style"
import error from "../../assets/404-notFound.png"
import { Typography } from '@material-ui/core'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const ErrorPage = () => {
    useUnprotectedPage()
    return(
        <ErrorPageContainer>
            <ErrorImage src={error} alt='Erro de página'/>
            <Typography color={'primary'}
                variant={'h4'}
                align={'center'}>
                    Erro 404 - Página não encontrada
                </Typography>
        </ErrorPageContainer>
    )


}
export default ErrorPage