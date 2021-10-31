import styled from "styled-components"

export const PostContainer = styled.div `
    border: 1px gray;
    border-style: groove;
    border-radius: 0.5rem;
    background-color: #eee;
    box-shadow: 2px 3px 5px 2px rgba(0, 0, 0, 0.3);
    max-width: 90%;
    width: 90vw;
    margin: 1%;
    display: flex;
    flex-direction: column;

    & p {

        margin: 2% ;
        word-break: break-all;
    }

    
`

export const PostHeader = styled.div `
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 10px;
    
`
export const Reaction = styled.div`
    display: flex;
    gap: 20%;
    padding-left: 2%;
`
export const PostFooter = styled.div `
    height: 8vh;
    display: flex;
    align-items: center;
    padding: 0 20px 2px 4px;
    justify-content: space-between;
`


export const UserNamePost = styled.h3`
    max-width: 350px;
    width: 70%;
    margin-left: 2%;
`

export const CommentContainer = styled.div`
    margin-left: 3%;

`