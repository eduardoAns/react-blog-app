
import { lazy } from 'react';
import { About } from '../Components/about/About';
import { Contact } from '../Components/contact/Contact';
import { PostForm } from '../Components/post/PostForm';


type JSXElement = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: JSXElement|React.LazyExoticComponent<JSXElement>;
    name: string;
}

const Home = lazy(() => import(/* webpackChunkName:"Home" */ "../Components/home/Home"));



export const routes:Route[] = [
    {   to: "/", 
        path:"/", 
        Component:Home,
        name: "Home" 
    },
    {   to: "/about",
        path:"about",
        Component:About ,
        name: "About"
    },
    {   to: "/contact",
        path:"contact",
        Component: Contact,
        name: "Contact"
    },
    


]

