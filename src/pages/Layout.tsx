import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function Layout() {
    return <section>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </section>
}