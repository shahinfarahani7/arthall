import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Links.css';

const links = [
    {
        title: "لیست کارها",
        path: "/"
    },
    {
        title: "افزودن کار",
        path: "/add"
    }
]

const Links = () => {
    const location = useLocation();
    const { hash, pathname, search } = location;
    return (
        <div>
            {links.map((link) => (
                <NavLink key={link.title} className={`links ${pathname === link.path && 'links-selected'}`} to={link.path}>{link.title}</NavLink>
            ))}
        </div>
    );
}

export default Links;