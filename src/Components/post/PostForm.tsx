import React from 'react'
import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { blogApi } from '../../apiCall/post';
import { postFormulario } from '../../interfaces/post';

type FormData = {
    titulo:string;
    subtitulo:string;
    contenido:string;
}

export const PostForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();    
    const [cookies] = useCookies(['token']);

    const addPost = async ({titulo,subtitulo,contenido}:FormData) => {
        let idUser:number = 0;
        if(cookies){
            const{data} =  await blogApi.get('/validtoken', {'headers':{'Authorization': cookies.token}})
            idUser = data.id;
        }

      const dataPost:postFormulario = {
            idUsuario:Number(idUser),
            titulo,
            subtitulo,
            contenido,
            fechaCreacion: "hoy",
            fechaActualizacion: "ayer",
            estado: "habilitado",
            categoria: {
                id: 1,
                nombre: ""
            },
            nombre:`usuario${idUser}`,
      }
      try {
            console.log(dataPost)
            const { data } = await blogApi.post('/post', dataPost);
            console.log(data);

      } catch (error) {
          console.log("error", error);
         
      }
  
    }



  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight my-4 text-dark">Agregar post</h3></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(addPost)} >
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="" 
                                    {...register("titulo", { required: "el titulo es requerido" })}
                                    />
                                <label className='text-dark'>Titulo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="" 
                                    {...register("subtitulo", { required: "el subtitulo es requerido" })}
                                    />
                                <label className='text-dark'>Subtitulo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="" 
                                    {...register("contenido", { required: "el subtitulo es requerido" })}
                                    />
                                <label className='text-dark'>Contenido</label>
                            </div>
                            <div className="fadeIn" >
                                <p className='text-danger'>
                                    {errors.titulo?.message}
                                </p>
                                <p className=' text-danger' >
                                    {errors.subtitulo?.message}
                                </p>
                                <p className=' text-danger' >
                                    {errors.contenido?.message}
                                </p>
                            </div>
                            
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
