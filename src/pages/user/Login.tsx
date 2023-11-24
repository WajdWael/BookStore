import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { GrNext } from 'react-icons/gr'
import { useAuth } from '../../contexts/AuthContext'
import { useState, useRef, useEffect } from 'react'

export default function Login() {
    useEffect(() => {
        const isAuth:(string|null) = localStorage.getItem('authToken')
        if(isAuth !== 'undefined') {
            navigate('/')
        }
    }, [])


    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const {signIn} = useAuth()
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signIn(emailRef.current!.value, passwordRef.current!.value)
            navigate('../UserPortfolio')
            console.log('user is logged in')

        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }


    const handelActive = ({ isActive }: { isActive: boolean }) => + (isActive ? "card-input.active" : '')
    
    return <section className="container-centered card-container">
        <header className='card-header-container'>
            <h1 className='hero-title txt-start m-0'>Log In</h1>
            <p className='hero-text txt-start'>We missed you! come back and add more books!</p>
        </header>
        <div className="card">
            <h2 className='card-heading'>Welcome back ... log in <FaRegHeart /> </h2>
            <form onSubmit={handleSubmit} className="card-form">
                <input
                    type="text"
                    placeholder='Email...'
                    name="email"
                    ref={emailRef}
                    required
                    // className="card-input"
                    className={`card-input ${handelActive}`}
                />
                <input
                    type="password"
                    placeholder='Password...'
                    required
                    name="password"
                    ref={passwordRef}
                    className={`card-input ${handelActive}`}
                />
                <div className="card-links-container">
                <h4 className='card-redirect'>Don't you have an account? <Link className='card-link' to='../signup'>Sign Up</Link></h4>
                <button type="submit" disabled={loading} className='btn center m-0'>Log in <GrNext className="colored-svg"/></button>
                </div>
            </form>


            {error && <h1>{error}</h1>}
        </div>

    </section>
}