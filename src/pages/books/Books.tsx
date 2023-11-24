import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import {useEffect,useState} from "react"
import { bookCollection } from "../../utils/booksCollection";
import { Book } from "../../interfaces/book";
// import { Timestamp } from "firebase/firestore/lite";

// import { db } from "../utils/firebase";

export default function Books() {

    const [booksArray, setBooksArray] = useState<Book[]>([])
    // const date = Timestamp.now()
    console.log(booksArray)

    useEffect(() => onSnapshot(bookCollection, async (snapshot: QuerySnapshot<DocumentData>) => {
        try {
            setBooksArray(
                snapshot.docs.map(doc => {
                    return {id:doc.id, ...doc.data()}
                })
            )
        } catch(error) {
            return error
        }
    }), [])

    return <section className="user-portfolio-container">
        <section>
            <h1 className="hero-title txt-start">Explore more books ...</h1>
            {booksArray && booksArray.length ? (
                    <section className="book-cards-container">
                    {
                        booksArray?.map(book => (
                        <Link to={`/books/${book.id}`}  key={book.id} className="book-card-container">
                            <header>
                                <h1 className="book-card-title">{book.title}</h1>
                                <h2 className="book-card-author useremail">{book.author}</h2>
                            </header>
                            <div className="flex-end by-user">
                                <span>By:
                                    
                                    <a className="underlined">User name {book.id}</a>
                                    <span>Created at {book.timespam}</span>
                                </span>
                            </div>
                        </Link>
                        ))
                    }
                </section>
                ) : (
                    <h1>Now books until know add the first one!</h1>
                )
            }
            <div className="flex-end">
                <Link to='../AddBook' className="btn nav-link btn-outline m-0">Add new book</Link>
            </div>
        </section>
    </section>
}