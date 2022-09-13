import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../apiCall/post';
import { post } from '../../interfaces/post';
import logo from '../../logo.svg';




export const PostList = () => {
    const [posts, setPosts] = useState<post[]>([])

    useEffect(() => {
        getPosts(setPosts);
    }, [])
    
    return (
        <div className='row row-cols-2 animate__animated animate__fadeIn'>
                {
                posts.map(post =>(
                    <div className='card ms-3' style={{maxWidth:400}}>
                        <div className='row no-gutters'>
                            <div className='col-md-4'>
                                <img src={logo} className='card-img' alt={post.titulo} />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>
                                    <h5 className='card-tittle text-dark'> {post.titulo}</h5>
                                    <p className='card-text text-dark'>{post.subtitulo}</p>
                                    <Link to={`./post/${post.id}`} >
                                        mas...
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                ))}
        </div>
    )
}
