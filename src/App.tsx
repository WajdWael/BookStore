import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Login from './pages/user/Login'
import SignUp from './pages/user/SignUp'
import UserPortfolio from './pages/user/UserPortfolio'
import AddBooks from './pages/books/AddBook'
import Books from './pages/books/Books'
import NotFound from './pages/NotFound'
import './styles.css'
import PrivateRoutes from './utils/PrivateRoute'
import BookDetail from './pages/books/BookDetails'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  
  <Route element={<PrivateRoutes/>}>
      {/* Loader- Auth loginfirst */}
      <Route path='UserPortfolio' element={<UserPortfolio />} />
      <Route path='AddBook' element={<AddBooks />} />

      {/* don't requiers login */}
      <Route path='Books' element={<Books />} />
      <Route path='Books/:id' element={<BookDetail />} />

  </Route>

<Route index element={<Home />} />
<Route path='SignUp' element={<SignUp />} />
<Route path='LogIn' element={<Login />} />



    <Route path='*' element={<NotFound/>} />
  </Route>
))

export default function App() {
  return <RouterProvider router={router} />
}

