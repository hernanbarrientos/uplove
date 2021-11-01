import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import { FeedListContainer, FeedListCardContainer } from "./style"
import PostCommentary from '../../components/PostCommentary/PostCommentary'


const FeedPage = () => {
    useProtectedPage()
    const token = localStorage.getItem("token")





    const [feeds, setFeeds] = useState([])


    useEffect(() => {
        axios.get(`${BASE_URL}/feeds`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setFeeds(res.data)
            console.log(res)


        })
            .catch((err) => console.log(err))
    }, [token])




    return (
        <FeedListContainer>
            <FeedListCardContainer>
                {feeds.map(feed =>
                    <PostCommentary
                        key={feed.id}
                        usuario={feed.author.username}
                        commentFeed={feed.content}
                        likes={feed.likes}
                        loves={feed.loves}
                    />)}
            </FeedListCardContainer>
        </FeedListContainer>
    )


}
export default FeedPage