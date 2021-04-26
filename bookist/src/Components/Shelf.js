import React from 'react'

function Shelf (props){
    console.log(props)

 let mappedTitles=  props.shelf.map(
(nameAuthor)=>  
    <div className="shelf-item">
        <p>{nameAuthor[0]+' by '+nameAuthor[1]}</p>
    </div>)
    return(
        <div className="shelf">
        <h1 className = 'shelfTitle'>Shelf</h1>
        <button className="clearShelf" onClick={props.clearShelf}>Clear Shelf</button>
        <br></br>
        <p>{mappedTitles}</p>
        </div>
    )
    
}


export default Shelf