import React from 'react'
import { post } from '../../interfaces/post'
import logo from '../../logo.svg';

export const PostBody = (post:post) => {
  return (
    <div className="container p-3">
      <div className='flex-row d-flex'>
        <div className='row '>
          <h2>{post.titulo}</h2>
          <h3>{post.subtitulo}</h3>
          {/* image 500px*/}
         
          <img src={logo} className='card-img max-width' alt={post.titulo} />
          <p>contenido:{post.contenido}</p>
        </div>
        
  
        <div className='row'>
          <div className=' '>
            <h3>Categoria</h3>
            <p className=''>{post.categoria?.nombre}</p>
            <hr></hr>
            <h3>Tags</h3>
            <ul className='  '>
              {
                post.tags.map(tag => (
                  <li>{tag.nombre}</li>
                ))
              }
            </ul>
          </div>
          
          

        </div>
      </div>
    </div>
  )
}
