import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function BookList (props){
if (props.filteredBooks.length==0){
 let mappedBooks = props.books.map(
(book)=>  {
    // console.log(book.img)
  return (<div className='book' onClick={()=>props.addToShelf(book.img)}>
    <img src={book.img} alt="bookImg"></img> 
    <br></br>

    {book.title}
    <br></br>
     {book.author}

    </div>)})
   return(
       <div>
           <h1 className="col">{mappedBooks}</h1>
       </div>
   )
   }else{
     let mappedBooks = props.filteredBooks.map(
(book)=>  {
    // console.log(book.img)
  return (<div className='booksFiltered' onClick={()=>props.addToShelf(book.img)}>
    <img src={book.img} alt="bookImg"></img> 
    <br></br>

    {book.title}
    <br></br>
     {book.author}

    </div>)})
   return(
       <div>
           <h1 className="col">{mappedBooks}</h1>
       </div>
   )
}}

export default BookList