import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose   } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/dashboard", name: "Dashboard" },
        { id: 4, path: "/profile", name: "Profile" },
        { id: 5, path: "/settings", name: "Settings" }
      ];
      
    return (
        <nav className="text-black p-6 bg-yellow-100">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : 
                    <AiOutlineMenu></AiOutlineMenu>
                }
            
            </div>
            <ul className={`md:flex absolute md:static
                ${open ? 'top-16' : '-top-60'}
                bg-yellow-100 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;