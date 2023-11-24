import {BiRun} from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom"
import { GrNext } from 'react-icons/gr'
import { useAuth } from '../../contexts/AuthContext'
import {useState, useRef, useEffect} from 'react'


export default function Signup() {
    useEffect(() => {
        const isAuth:(string|null) = localStorage.getItem('authToken')
        if(isAuth !== 'undefined') {
            navigate('/')
        }
    }, [])


    // const [email, setEmail] = useState<string>("");
    // // const [username, setUsername] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [confirmPassword, setconfirmPassword] = useState<string>("");

    // const {signUp} = useAuth()
    // const navigate = useNavigate();

    // const usernameRef = useRef<HTMLInputElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const passwordConfirmRef = useRef<HTMLInputElement | null>(null)

    const {signUp} = useAuth()
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
            return setError("Passwords do not match")
        }
        try {
            setError("")
            setLoading(true)
            await signUp(
                emailRef.current!.value,
                passwordRef.current!.value
            )
            navigate('../books')
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false)
    }


    const handelActive = ({ isActive }: { isActive: boolean }) => + (isActive ? "card-input.active" : '')
    return <section className="container-centered card-container">
        <header className='card-header-container'>
            <h1 className='hero-title txt-start m-0'>Sign Up</h1>
            <p className='hero-text txt-start'>Start a unique experience and join us!</p>
        </header>
        <div className="card">
            <h2 className='card-heading'>Welcome to Books store ... Start now! <BiRun className="colored-svg"/> </h2>
            <form onSubmit={handleSubmit} className="card-form">
                <input
                    type="text"
                    placeholder='Username...' name="username"
                    className={`card-input ${handelActive}`}
                    // ref={usernameRef}
                    // onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Email...'
                    name='email'
                    required
                    className={`card-input ${handelActive}`}
                    // onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                />
                <input
                    type="password"
                    placeholder='Password...'
                    required
                    name='password'
                    className={`card-input ${handelActive}`}
                    // onChange={(e)=>setPassword(e.target.value)}
                    ref={passwordRef}
                />
                <input
                    type="password"
                    placeholder='Confirm Password...'
                    required
                    name='confirm-password'
                    className={`card-input ${handelActive}`}
                    // onChange={(e)=>setconfirmPassword(e.target.value)}
                    ref={passwordConfirmRef}
                />
                <div className="card-links-container">
                    <h4 className='card-redirect'>Already have an acoount? <Link className='card-link' to='../login'>Log In</Link></h4>
                    <button disabled={loading} type="submit" className='btn center m-0'>Sign Up <GrNext className="colored-svg"/></button>
                </div>
            </form>
            {error && <h1>{ error }</h1>}
        </div>
    </section>
}