import styled from "styled-components"

export const ScreenContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 10vh;
`
export const LogoImage = styled.img`
    margin-top: 4%;
    max-width: 150px;
    width: 50vw;
    opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 4s;
    
@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
        
`
export const InputsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin-top: 4%;
    width: 80vw;

    .button{
        margin-top:2%;
        font-size: 1 rem;
    }
`


export const SignUpButtonContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin-top: 1%;
    width: 80vw;
`
export const ModalFrame = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backdrop-filter: blur(15px);
    `

export const ModalContent = styled.div`
    width: 70vw;
    height: 30vh;
    background-color: #DEDDFF;
`