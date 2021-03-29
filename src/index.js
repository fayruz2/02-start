import React from "react"
import ReactDOM from "react-dom"
import "./style.css"


const style = {
    color:"yellow",
    backgroundColor:"orange"
}

// const app = (
//     <h1 style={style} className = "title">
//         My name is {name},My age {age} 
//     </h1>
// )

// const Text = () => {
//     return <p style ={style} className="salsa">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta 
//     ducimus quas pariatur esse deserunt alias.
//      Expedita facilis officia voluptas qui doloribus quasi provident
//       dolore, nihil accusantium deserunt! Unde, rerum eos!</p>
// }
const Header = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..."/>
            <span className="addBtn">Add</span>
        </div>
    )
    
}

const Body = () => {
    return (
        <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
    </ul>
    )
}


const App = () => {

    // const name = "Fayruz"
    // const age = 14

    return (
    <div>
        <Header/>
        <Body/>
    </div>
    )
}




ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)