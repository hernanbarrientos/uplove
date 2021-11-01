import React, { useState } from 'react'
import { PostContainer, UserNamePost, PostFooter, CommentContainerInput, Reaction } from './styles'
import CounterIcon from './CounterIcon'
import CommentSection from './CommentSection'
import iconLikeBlack from '../../assets/like-black.svg'
import iconLikeWhite from '../../assets/like-white.svg'
import iconLoveWhite from '../../assets/favorite-white.svg'
import iconLoveBlack from '../../assets/favorite.svg'
import iconComment from '../../assets/comment_icon.svg'
import useForm from '../../hooks/useForm'
import axios from "axios"
import { BASE_URL } from '../../constants/urls'





const Post = (props) => {

  const [love, setLove] = useState(false)

  const [like, setLike] = useState(false)

  const [countLove, setCountLove] = useState(0)

  const [countLike, setcountLike] = useState(0)

  const [isCommenting, setisCommenting] = useState(false)

  const [countComment, setcountComment] = useState(0)

  const [comment, setcomment] = useState([])

  const [form, onChange, clear] = useForm({ feedId: "", like: "", love: "" })

  const token = localStorage.getItem("token")

  const reactionsPost = () => {



  }

  const onClickLove = () => {

    if (love) {
      setLove(!love)
      setCountLove(countLove - 1)
    } else {
      setLove(!love)
      setCountLove(countLove + 1)

    }



  };

  const onClickLike = () => {
    if (like) {
      setLike(!like)
      setcountLike(countLike - 1)
    } else {
      setLike(!like)
      setcountLike(countLike + 1)

    }
  };

  const onClickComment = () => {
    setisCommenting(!isCommenting)

  };





  const handleSubmitComment = (newComment) => {
    const listComment = [...comment, newComment]
    setcomment(listComment)
    setisCommenting(false)
    setcountComment(countComment + 1)
  }

  const iconLove = love ? (iconLoveBlack) : (iconLoveWhite)

  const iconLike = like ? (iconLikeBlack) : (iconLikeWhite)

  const textAreaComment = isCommenting ? (

    <CommentSection handleSubmitComment={handleSubmitComment} />
  ) : (

    comment.map(commentView => {
      return (
        <CommentContainerInput>
          <p key={commentView.id}>{commentView}</p>
        </CommentContainerInput>
      )
    })
  )


  return (
    <PostContainer>

      <UserNamePost>{props.usuario}</UserNamePost>
      <p>{props.commentFeed}</p>

      <PostFooter>
        <Reaction>
          <CounterIcon
            icon={iconLove}
            onClickIcon={onClickLove}
            countValue={countLove}
          />

          <CounterIcon
            icon={iconLike}
            onClickIcon={onClickLike}
            countValue={countLike}
          />
        </Reaction>


        <CounterIcon
          icon={iconComment}
          onClickIcon={onClickComment}
          countValue={countComment}
        />

      </PostFooter>

      {textAreaComment}
    </PostContainer>
  )
}

export default Post