import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogApi, getPostById } from '../../apiCall/post'
import { post } from '../../interfaces/post'
import { coment } from '../../interfaces/coment'
import { Coment } from './Coment'
import { ComentForm } from './ComentForm'
import { PostBody } from './PostBody'

type FormData = {
  nombre:string;
  contenido:string;
}

export const Post = () => {
    const [isPostComent, setIsPostComent] = useState(false)
    const [post, setPost] = useState<post>({
        id: 0,
        titulo: '',
        subtitulo: '',
        idUsuario: 0,
        contenido: '',
        comentarios: [],
        fechaCreacion: '',
        estado: "",
        tags:[],
        categoria:{
            id:0,
            nombre:""
        },
    })
    const params = useParams()
  
    useEffect(() => {
      getPostById(params.id, setPost)  
    }, [params.id, isPostComent])

    
    
    const crearComentario = async ({nombre,contenido}:FormData) => {
      const tiempoTranscurrido = Date.now();
      const hoy = new Date(tiempoTranscurrido);

      const dataPost:coment = {
          id: null,
          idPost: post.id,
          titulo:"titulo generico",
          nombre,
          contenido,
          fechaCreacion:hoy.toDateString(),
          estado:'habilitado'
      }

      try {
          
          await blogApi.post('/comentario', dataPost);
          setIsPostComent(!isPostComent)
          
      } catch (error) {
          console.log("error en las credenciales");
         
      }
  
  }
  
    return (
          <div>
              <PostBody {...post} />
              <h4>Comentarios</h4>
              {
                post.comentarios.map(comentario => (
                  <Coment {...comentario} key={comentario.id} />
              ))}
              <ComentForm crearComentario = {crearComentario} />

          </div>
        
    )
}
