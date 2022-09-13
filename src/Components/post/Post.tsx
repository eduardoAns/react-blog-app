import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPostById } from '../../apiCall/post'
import { post } from '../../interfaces/post'
import logo from '../../logo.svg'

export const Post = () => {
    const [post, setPost] = useState<post>({
        id: 0,
        titulo: '',
        subtitulo: '',
        idUsuario: 0,
        contenido: '',
        comentarios: []
    })

    const params = useParams()
  
    useEffect(() => {
      getPostById(params.id, setPost)  
    }, [params.id])
    
  
    return (
      <>
      {post!== null 
        ? (
          <div>
            <h2>Post con el id {params.id}</h2>

              <p>titulo:{post.titulo}</p>
              <img src={logo} />
              <p>contenido:{post.contenido}</p>
              <hr />
              <h4>Comentarios</h4>

              {
                post.comentarios.map(comentario => (
                  <div key={comentario.id}>
                    <p>Nombre: {comentario.titulo}</p>
                    <p>Contenido: {comentario.contenido}</p>
                    <hr />
                  </div>
              ))}

              
          </div>
          
        )
        :('no hai personaje') 
        
      
      }
      </>
  
    )
}
