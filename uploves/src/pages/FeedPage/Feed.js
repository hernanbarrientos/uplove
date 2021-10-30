import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import {FeedListContainer, FeedListCardContainer } from "./style"


const FeedPage = () => {    
    useProtectedPage()
    const token = localStorage.getItem("token")

    const FeedCard = ({Usuario, comentario, likes, loves}) => {
        return (
            <FeedListCardContainer>
            <h3>{Usuario}</h3>
            <p>{comentario}</p>
            <p>{likes} {loves}</p>
            </FeedListCardContainer>
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
            {feeds.map(feed =>
            <FeedCard
                key={feed.id}
                Usuario={feed.author.username}
                comentario={feed.content}
                likes={feed.likes}
                loves={feed.loves}
            />)}
        </FeedListContainer>
    )


}
export default FeedPage