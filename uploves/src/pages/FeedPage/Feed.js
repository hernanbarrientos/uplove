import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import {FeedListContainer, FeedListCardContainer } from "./style"
import Post from '../../components/post/Post'


const FeedPage = () => {    
    useProtectedPage()
    const token = localStorage.getItem("token")

    const FeedCard = ({Usuario, comentario, likes, loves}) => {
        return (
            <div>
            <h3>{Usuario}</h3>
            <p>{comentario}</p>
            <p>{likes} {loves}</p>
            </div>
        )
    }



    const [feeds, setFeeds] = useState([])

    
    useEffect(() => {
        axios.get(`${BASE_URL}/feeds`,{
            headers: {
            Authorization: `Bearer ${token}`
            }
        }).then((res)=>{
            setFeeds(res.data)
           
                 
        })
        .catch((err)=> console.log(err))
        }, [])
    



    return(
        <FeedListContainer>
            <FeedListCardContainer>
            {feeds.map(feed =>
            <Post
                key={feed.id}
                usuario={feed.author.username}
                comentario={feed.content}
                likes={feed.likes}
                loves={feed.loves}
            />)}
            </FeedListCardContainer>
        </FeedListContainer>
    )


}
export default FeedPage