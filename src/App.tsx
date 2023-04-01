import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BOOKSLIBRARY } from './Mock'
import Book from './components/Book/Book'
import { LibraryAtom } from './state'
import { useAtom } from 'jotai'

function App() {
  const [books, setBooks] = useAtom(LibraryAtom)

  return (
    <div className="App">
      {books.map(({ title, author, pages, completed }) => (
        <Book title={title} author={author} pages={pages} completed={completed} key={title}/>
      ))}
    </div>
  )
}

export default App
