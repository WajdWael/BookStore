import { db } from "../utils/firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { User } from "firebase/auth";

interface Book {
  title: string
  author: string
  id: string
  date: string
  user: User
}
const bookCollectionRef = collection(db, "books");
class BookDataService {
  addBooks = (newBook:Book) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id:string, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id:string) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id:string) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();