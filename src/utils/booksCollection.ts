import {collection} from 'firebase/firestore'
import { db } from './firebase'
export const bookCollection = collection(db, 'books')