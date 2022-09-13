import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { blogApi, getPostById } from '../../apiCall/post'
import { post } from '../../interfaces/post'
import logo from '../../logo.svg'
import { useForm } from 'react-hook-form';
import { coment } from '../../interfaces/coment'

type FormData = {
  nombre:string;
  contenido:string;
}

export const Post = () => {


    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormData>();    
    const [showError, setShowError] = useState(false)
    const [isPostComent, setIsPostComent] = useState(false)
    const [showMsg, setShowMsg] = useState(false)
    const [msg, setMsg] = useState('')

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
    }, [params.id, isPostComent])

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    
    const crearComentario = async ({nombre,contenido}:FormData) => {
    
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
          
          const request = await blogApi.post('/comentario', dataPost);
          setIsPostComent(!isPostComent)
          
  
          
      } catch (error) {
          console.log("error en las credenciales");
         
      }
  
  
  
  }
  
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
                    <p>fecha:{comentario.fechaCreacion}</p>
                    <p>Nombre: {comentario.nombre}</p>
                    <p>Contenido: {comentario.contenido}</p>
                    <hr />
                  </div>
              ))}

              <form onSubmit={handleSubmit(crearComentario)}>
                <input 
                  className='form-control  '
                  type="text" 
                  placeholder="Nombre" 
                  {...register("nombre", { required: "el nombre es requerido" })} 
                />
                <input
                  className='form-control'
                  type="text"
                  placeholder="Contenido"
                  {...register("contenido", { required: "el contenido es requerido" })}
                />
                <div
                  className="fadeIn"
                  style={{display: showMsg? 'flex':'none'}}
                >
                  {msg}
                </div>
                <button type="submit" className='btn btn-primary '>Enviar</button>
              </form>


          </div>
          
        )
        :('no hai personaje') 
        
      
      }
      </>
  
    )
}
