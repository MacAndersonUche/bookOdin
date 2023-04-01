import { atom } from 'jotai'
import { BOOKSLIBRARY } from './Mock'
import { SingleBook } from './type'


export const LibraryAtom = atom<SingleBook[]>(BOOKSLIBRARY)

// export const addBooksAtom = atom((get) => get(LibraryAtom).push({obj}))