import HeroImg from '../assets/img/books.avif'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function HomePage() {
    const {user} = useAuth()


    return <main className='container'>
        <h1 className="hero-title m-0">Welcome to Books Store a way to read more ...</h1>
        <p className="hero-text">Create your own favorite books, and look to others favorite books.</p>
        <div className="center">

            {user
                ?
                <Link to='../books' className='btn nav-link btn-outline'>See books</Link>
                :
                <Link to='../login' className='btn nav-link'>Get started</Link>
            }
        </div> 
        <div className="center">
            <img className='hero-img' src={HeroImg} alt="" />
        </div>
    </main>
}