import { CiUser } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";

export default function UserPortfolio() {

    const [error, setError] = useState("")
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    
    async function handleLogout() {
        setError("")
        try {
            await logOut()
            navigate('../login')
        } catch {
            setError("Failed to log out, please reload the page and try again!")
        }
    }

    return <section className="user-portfolio-container">

        {error && <h1>{error}</h1>}
        <header className="user-info-container">
            <div className="top-container">
                <div className="user-info-section">
                    <CiUser className="colored-svg portfolio-icon" />
                    <section className="user-info">
                        <h1 className="username">Username goes here</h1>
                        <h2 className="useremail">{user!.email}</h2>
                    </section>
                </div>

                <section className="logout">
                    <button onClick={handleLogout} className="btn">Log Out</button>
                </section>
            </div>
        </header>
        <section>
            <h1 className="hero-title txt-start">Your favorite books:</h1>

            <section className="book-cards-container">
                <div className="book-card-container">
                    <header>
                    <h1 className="book-card-title">Book title goes here</h1>
                    <h2 className="book-card-author useremail">book author goes here</h2>
                    </header>
                    <div className="book-card-buttons">
                        <button className="btn small-btn center delete-btn">Delete <AiTwotoneDelete/></button>
                        <button className="btn small-btn center update-btn">Update <MdOutlineUpdate/></button>
                    </div>
                </div>
                <div className="book-card-container">
                    <header>
                    <h1 className="book-card-title">Book title goes here</h1>
                    <h2 className="book-card-author useremail">book author goes here</h2>
                    </header>
                    <div className="book-card-buttons">
                        <button className="btn small-btn center delete-btn">Delete <AiTwotoneDelete/></button>
                        <button className="btn small-btn center update-btn">Update <MdOutlineUpdate/></button>
                    </div>
                </div>
                <div className="book-card-container">
                    <header>
                    <h1 className="book-card-title">Book title goes here</h1>
                    <h2 className="book-card-author useremail">book author goes here</h2>
                    </header>
                    <div className="book-card-buttons">
                        <button className="btn small-btn center delete-btn">Delete <AiTwotoneDelete/></button>
                        <button className="btn small-btn center update-btn">Update <MdOutlineUpdate/></button>
                    </div>
                </div>
            </section>

            <div className="flex-end">
                <Link to='../AddBook' className="btn nav-link btn-outline m-0">Add more books</Link>
            </div>
        </section>
    </section>
}

