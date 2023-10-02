import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':'' }` }
                        to="/vitrina"
                    >
                        Tienda
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':'' }` }
                        to="/buscar"
                    >
                        Buscador
                    </NavLink>

                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    )
}