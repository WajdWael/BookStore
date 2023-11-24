import { Link } from "react-router-dom"
export default function NotFound() {
    return <section className="container center">
        <h1>404</h1>
        <p>Not Found</p>
        <Link to='.'>Back to home</Link>
    </section>
}