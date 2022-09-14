import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, Router } from 'react-router-dom'
import { blogApi } from '../../apiCall/post';
import { useCookies } from 'react-cookie'

  type FormData = {
    email:string;
    password:string;
  }
export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();    
    const [cookies, setCookie] = useCookies(['token']);

    const onLogin = async ({email,password}:FormData) => {
      
      const dataPost:FormData = {
            email,
            password
      }
      try {
            
            if (!cookies) {
                return;
            }
            const { data } = await blogApi.post('/login', dataPost);
            setCookie('token', data.token , { path: '/' });
            console.log(data);
            console.log(cookies);

            //redirect to home
            window.location.href = '/';    

    

      } catch (error) {
          console.log("error en las credenciales");
         
      }
  
    }




  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight my-4 text-dark">Login</h3></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onLogin)} >
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    type="text" 
                                    placeholder="" 
                                    {...register("email", { required: "el correo es requerido" })}
                                    />
                                <label className='text-dark'>correo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    type="password" 
                                    placeholder="" 
                                    {...register("password", { required: "la contraseña es requerida" })}
                                    />
                                <label className='text-dark'>Password</label>
                            </div>
                            <div className="fadeIn" >
                                <p className='text-danger'>
                                    {errors.email?.message}
                                </p>
                                <p className=' text-danger' >
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center py-3">
                        <div className="small">
                            <Link to={`/auth/register`}>No tienes cuenta? Registrate!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
