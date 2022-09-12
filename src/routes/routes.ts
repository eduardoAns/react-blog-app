
import { About } from '../Components/about/About';
import { Contact } from '../Components/contact/Contact';
import {Home} from '../Components/home/Home';

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
}


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
    }
]

