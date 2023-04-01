import { useAtom } from "jotai"
import { LibraryAtom } from "../../state"
import "./form.css"
import { useState } from "react"
import { SingleBook } from "../../type"

const INITIALFORM = {
    title: "",
    author: "",
    completed: false,
    pages: 0
}
const Form = () => {
    const [books, setBooks] = useAtom(LibraryAtom)
    const [filledBooks, setFilledBooks] = useState<SingleBook>(INITIALFORM)


    const submitHandler = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setFilledBooks(INITIALFORM)
        setBooks([...books, filledBooks])

    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title of the book:</label>
            <input type="text" required placeholder="Title" 
            id="title" value={filledBooks.title}
            onChange={e => setFilledBooks({ ...filledBooks, title: e.target.value })} />

            <label htmlFor="author">Author of the book:</label>
            <input type="text" placeholder="Author" id="author"
            value={filledBooks.author}
            onChange={e => setFilledBooks({ ...filledBooks, author: e.target.value })} />

            <label htmlFor="pages">How many pages:</label>
            <input type="number" placeholder="Number of Pages" value={filledBooks.pages}
             id="pages" onChange={e => setFilledBooks({ ...filledBooks, pages: Number(e.target.value) })} />


            <label htmlFor="read">Has the book been completed</label>
            <select name="" id="read" 
            onChange={e => setFilledBooks({ ...filledBooks, completed: Boolean(Number(e.target.value)) })}>
                <option value="1">True</option>
                <option value="0">False</option>
            </select>

            <button onClick={submitHandler}>Add To Library</button>
        </form>
    )
}


export default Form