import { useState } from "react"
import { SingleBook } from "../../type"
import Form from "../Form/Form"
import Modal from "../Modal/Modal"


const Book = ({ title, author, pages, completed }: SingleBook) => {
    const [show, setShow]  = useState(false)

    
    return (
        <div key={title}>
            <h2>{title}</h2>
            <p>By {author}</p>
            <p>The book has {pages} pages</p>
            <p>{completed ? "The book has been completed" : "Uh Ho you need to complete it"}</p>
            <button onClick={e => setShow(true)}>Add New Book</button>
            {/* <button>Delete Book</button> */}
            <Modal handleClose={setShow} show={show} >
                <Form/>
            </Modal>
            <hr></hr>
        </div>
    )
}


export default Book