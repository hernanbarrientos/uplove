import styled from "styled-components"

export const ScreenContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 4vh;
`
export const LogoImage = styled.img`
    margin-top: 2%;
    max-width: 150px;
    width: 50vw;
    animation: move 0.9s linear infinite;

    @keyframes move {
  0% {
    transform: translate(-2%, 0px);
  }
  50% {
    transform: translate(0px, 2%);
  }
  100% {
    transform: translate(-2%, 0px);
  }
}
        
`
export const InputsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin-top: 2%;
    width: 80vw;

    .button{
        margin-top:2%;
    }
`

