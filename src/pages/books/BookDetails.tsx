import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase'
import { useEffect, useState } from 'react';
import {Book} from '../../interfaces/book'

export default function BookDetail() {
    const { id } = useParams();
    const getBook = doc(db, `books/${id}`)

    const [loading, setLoading] = useState(false)
    const [error, serError] = useState('')
    const [book, setBook] = useState({})


    useEffect(() => {
        const fetchBookData = async () => {
            const docSnap = await getDoc(getBook);
            try {
                setLoading(true)
                if (docSnap.exists()) {
                    const newBookObj = { id: docSnap.id, ...docSnap.data() }
                    setBook(newBookObj)
                    setLoading(false)
                }
                
            } catch {
                return serError("no shcu")
                
                // console.log("No such document!")
            }
        }
        fetchBookData();
    }, [getBook]);
    
    
    interface BookProps {
        book: Book;
    }
    function renderSingleBook({ book }: BookProps) {
        return (
            <section key={book.id}>
                <h1>{ book.title}</h1>
                <h1>{book.author}</h1>
                <Link to="../books">Go back</Link>
            </section>
        )
    }

    {error && <h1>{ error }</h1>} 
    if(loading) return <h1>We are loading data...</h1>
    return <section>
        {Object.keys(book) && Object.keys(book).length ? (
            <i>
                {renderSingleBook({book})}
            </i>
        ) : (
            null
        )} 
            
    </section>
}