import { GiBookshelf } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom"
import {GrNext} from 'react-icons/gr'
import Books from '../../assets/img/books.avif'


import { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase"; // export const db = getFirestore(app)
import { Timestamp } from "firebase/firestore";

export default function AddBook() {
    const author = useRef<HTMLInputElement | null>(null) 
    const title = useRef<HTMLInputElement | null>(null) 

    const [date, setDate] = useState(''); 
    const time = Timestamp.now().toDate().toString(); 
    setDate(time); 

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const addBook = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.current!.value === '') {
            return setError("Please add a value")
        } else if (author.current!.value === '') {
            return setError("Please add a value")
        }
        try {
            setError("")
            setLoading(true)
            await addDoc(collection(db, 'books'), {
                title: title.current?.value,
                author: author.current?.value,
                timespam: date.toString()
            })
            console.log("adding a new books")
            navigate('../books')
        } catch {
            setError("Failed to add a book, Please try again!");
        }
    }

    const handelActive = ({ isActive }: { isActive: boolean }) => + (isActive ? "card-input.active" : '')
    
    return <section className="container-centered">
        <section className="addnewbook-header">
            <header className='card-header-container'>
                <h1 className='hero-title m-0'>Spread Benefits</h1>
                <p className='hero-text'>Let other people know your own favorite book!</p>
            </header>
            <div className="addnewbook-img">
                <img className='add-img' src={Books} alt="Books" />
            </div>
        </section>
        <div className="card">
            <h2 className='card-heading addnewbook-heading'>
                Recommnad your own loved books
                <GiBookshelf />
            </h2>
            <form onSubmit={addBook} className="card-form">
                <input
                    ref={title}
                    type="text"
                    placeholder='Book Title...'
                    name="book__title"
                    className={`card-input ${handelActive}`}
                />
                <input
                    ref={author}
                    type="text"
                    placeholder='Author...'
                    name="author"
                    className={`card-input ${handelActive}`}
                />
                <div className="card-links-container">
                    <h4 className='card-redirect'>Do you want to see other books? <Link className='card-link' to='../books'>See Books</Link></h4>
                    <button disabled={loading} type="submit" className='btn center m-0'>Add Your Book <GrNext className="colored-svg"/></button>
                </div>
            </form>
            {error && <h1>{ error }</h1>}
        </div>
    </section>
}