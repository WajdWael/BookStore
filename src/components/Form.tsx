import {IoHeartCircleSharp} from 'react-icons/io5'
// import { Link } from "react-router-dom"

export default function Form() {
    return <section className="container card">
        <header>
            <h1>Log In</h1>
            <p>We missed you! come back and add more books!</p>
        </header>
        <div className="card">
            <h2>Welcome back ... log in <IoHeartCircleSharp /> </h2>
            <form action="" className="form">
                <input type="text" name="text" className="form-text" />
                <input type="password" name="password"  className="form-password" />
            </form>
        </div>

    </section>
}