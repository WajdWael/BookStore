import { Navigate,Outlet} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
// import {onAuthStateChanged } from "firebase/auth";
// import {auth} from '../utils/firebase'


// const PrivateRoutes = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             <Outlet />
//             console.log(user,"hereis user loggedin")
//         } else {
//             <Navigate to="/login" />
//         }
//     })
// }
// export default PrivateRoutes


const PrivateRoutes = ()  =>  {
    const { user } = useAuth()
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes