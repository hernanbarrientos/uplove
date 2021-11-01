import React, { useState } from 'react'
import { CommentContainerInput, InputComment } from "./styles"


const CommentSection = (props) => {

	const [inputValue, setInputValue] = useState("")



	const onChangeComment = (event) => {
		setInputValue(event.target.value)
	}

	return (
		<CommentContainerInput>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={onChangeComment}
			/>
			<button onClick={() => { props.handleSubmitComment(inputValue) }} >Enviar</button>
		</CommentContainerInput>
	)
}

export default CommentSection