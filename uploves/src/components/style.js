import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 1.3rem;
    height: 8vh;
    justify-content: space-between;

    h2{
        font-size: 1.5rem;
    }
       
`
export const IconLogo = styled.img`
    max-width: 3rem;
    padding: 4px;
    width: 70%;
    
    
`