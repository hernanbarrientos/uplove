import styled from "styled-components"

export const ScreenContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 10vh;
    text-align: center;

    h1, p{
    
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 3s;
    }

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0.8;
	}
}
    
`

export const LogoImage = styled.img `
    margin: 1.5%;
    max-width: 150px;
    width: 50vw;
    opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2s;
    

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

        
`
export const SignUpButtonContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin-top: 1%;
    width: 80vw;
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