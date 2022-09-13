import React from 'react'
import { coment } from '../../interfaces/coment'

export const Coment = (comentario:coment) => {
  return (
        <div className='container p-3'>
            <p>fecha:{comentario.fechaCreacion}</p>
            <p>Nombre: {comentario.nombre}</p>
            <p>Contenido: {comentario.contenido}</p>
            <hr />
        </div>
  )
}
