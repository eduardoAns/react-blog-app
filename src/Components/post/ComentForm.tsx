import React from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
    nombre:string;
    contenido:string;
}

export const ComentForm = ({ crearComentario }: {crearComentario: any;}) => {

const { register, handleSubmit, formState: { errors } } = useForm<FormData>();    

  return (
    <form onSubmit={handleSubmit(crearComentario)} className="p-3">
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
        <div className="fadeIn" >
            <p className='text-danger'>
                {errors.contenido?.message}
            </p>
            <p className=' text-danger' >
                {errors.nombre?.message}
            </p>
        </div>
        <button type="submit" className='btn btn-primary '>Enviar</button>
    </form>
  )
}
