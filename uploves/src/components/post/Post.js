import React, { useState } from 'react'
import { PostContainer, UserNamePost, PostFooter, CommentContainer, Reaction } from './styles'

import IconeComContador from './IconeComContador'
import Comentarios from './Comentarios'
import iconeLikePreto from '../../assets/like-black.svg'
import iconeLikeBranco from '../../assets/like-white.svg'
import iconeCoracaoBranco from '../../assets/favorite-white.svg'
import iconeCoracaoPreto from '../../assets/favorite.svg'
import iconeComentario from '../../assets/comment_icon.svg'

const Post = (props) => {

  const [love, setLove] = useState(false)

  const [like, setLike] = useState(false)

  const [numeroLove, setnumeroLove] = useState(0)

  const [numeroLike, setnumeroLike] = useState(0)

  const [comentando, setComentando] = useState(false)

  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const [comentarios, setComentarios] = useState([])

  

  const onClickLove = () => {
    if(love) {
      setLove(!love)
      setnumeroLove(numeroLove -1)
    } else {
      setLove (!love)
      setnumeroLove(numeroLove + 1)

    }
  };

  const onClickLike = () => {
    if(like) {
      setLike(!like)
      setnumeroLike(numeroLike -1)
    } else {
      setLike (!like)
      setnumeroLike(numeroLike + 1)

    }
  };

  const onClickComentario = () => {
    setComentando(!comentando)

  };

  const enviarComentario = (novoComentario) => {
    const listaDeComentarios = [...comentarios, novoComentario];
    setComentarios(listaDeComentarios);
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1)
  }

  const iconeLove = love ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const iconeLike = like ? (iconeLikePreto) : (iconeLikeBranco)

  const caixaDeComentario = comentando ? (
    // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
    <Comentarios enviarComentario={enviarComentario}/>
  ) : (
    // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
    // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )
  

  return (
    <PostContainer>
      
      <UserNamePost>{props.usuario}</UserNamePost>
      <p>{props.comentario}</p>

      <PostFooter>
        <Reaction>
        <IconeComContador
          icone={iconeLove}
          onClickIcone={onClickLove}
          valorContador={numeroLove}
        />

        <IconeComContador
          icone={iconeLike}
          onClickIcone={onClickLike}
          valorContador={numeroLike}
        />
        </Reaction>
        

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
        
      </PostFooter>

      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post