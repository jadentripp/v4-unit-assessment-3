import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            userInput: '',
        }
    }
    handleChange= (e)=>{
        this.setState({
            userInput: e.target.value
        })
    }
    clearSearch= ()=>{
        this.setState({userInput: ''})
    }
    render(){
        return(
        <div className="searchBar">
        <input type="text" onChange={this.handleChange}></input>
        <button className="search" value={this.userInput} onClick={()=>this.props.filterBooks(this.state.userInput)}>Search</button>
         <button className="clearSearch" onClick={()=>this.clearSearch()}>Clear Search</button>
         </div>)
    }
}
export default SearchBar