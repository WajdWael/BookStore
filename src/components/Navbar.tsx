import { NavLink } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { PiBooksDuotone } from 'react-icons/pi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";


import { useAuth } from '../contexts/AuthContext';



export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const navigate = useNavigate()
    const {user} = useAuth()


    return <nav className="navbar-container">
        <div className="logo-container">
            <h3 className='logo'>Books Store &#128218;</h3>
        </div>
        <div className="menu-icon center nav-link btn nav-menu" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBarsStaggered />}
        </div>

        <div className={click ? 'nav-list-container active' : 'nav-list-container'}>
            <NavLink
                to='.'
                className={({ isActive }) =>
                    "nav-link btn center icon" + (isActive ? " activeNav" : "")
                }
                onClick={closeMobileMenu}
            ><BiHomeAlt className="colored-svg"/> Home
            </NavLink>
            {user ? (
                <>
                
                <NavLink
                to='books'
                className={({ isActive }) =>
                    "nav-link btn center icon" + (isActive ? " activeNav" : "")
                }
                onClick={closeMobileMenu}
            ><PiBooksDuotone className="colored-svg"/> Books
                </NavLink>
                <NavLink
                to='UserPortfolio'
                className={({ isActive }) =>
                    "nav-link btn center icon" + (isActive ? " activeNav" : "")
                }
                onClick={closeMobileMenu}
            ><FaUserCircle className="colored-svg"/>
                </NavLink>
                </>

                
            ): (
                <NavLink
                to='signup'
                className={({ isActive }) =>
                'nav-link btn btn-outline nav' + (isActive ? " activeNav" : "")
                }
                onClick={closeMobileMenu}>Sign up</NavLink>
            )}
            


        </div>
    </nav>
}



// const Header = () => {
//     const navigate = useNavigate()
//     const {user, logoutUser} = useAuth()

//     const logoutClick = () => {
//         navigate('/login')
//     }

//   return (
//     <div className="header">
//         <div>
//             <Link id="header-logo" to="/">LOGO</Link>
//         </div>

//         <div className="links--wrapper">
//             {user ? (
//             <>
//                 <Link to="/" className="header--link">Home</Link>
//                 <Link to="/profile" className="header--link">Profile</Link>

//                 <button onClick={logoutUser} className="btn">Logout</button>
//             </>
//             ):(
 
//                 <Link className="btn" to="/login">Login</Link>

//             )}
            
//         </div>
//     </div>
//   )
// }

// export default Header
