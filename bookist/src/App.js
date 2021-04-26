import './App.css';
import Header from './Components/Header'
import Shelf from './Components/Shelf'
import BookList from './Components/BookList'
import SearchBar from './Components/SearchBar'
import data from './data'
import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books: data,
      shelf: [],
      filteredBooks: []
    }
  }

  addToShelf = (bookImg)=>{
    console.log(bookImg)
    let { shelf, books} = this.state;
    books.forEach((book)=>{
      console.log(book.img)
      if (book.img===bookImg){
        this.setState({
         shelf: [...shelf, [book.title, book.author]],
       })
      };
     })
  }

  clearShelf = () =>
  this.setState({
    shelf : []
  })

  filterBooks = (input) =>{
    if (input ==''){
      return
    }
    input = input.toLowerCase();
    console.log(input)
    let filteredBooks = this.state.books.filter((book)=>{
      console.log(book)
      if (book.title.toLowerCase().includes(input) ||  book.author.includes(input)){
       return book
      }
    })
    console.log(filteredBooks)
    this.setState({
         filteredBooks: filteredBooks
       })
  }
  

  render(){
  return (
    <div className="App">
      <Header />
      <SearchBar filterBooks={this.filterBooks} />
      <BookList books={this.state.books} addToShelf={this.addToShelf} filteredBooks = {this.state.filteredBooks}/>
      <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
    </div>
  );
  }
  }

export default App;
