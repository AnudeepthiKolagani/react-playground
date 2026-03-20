import React from 'react'
import ReactDOM from 'react-dom/client'

const Body = () =>{
    return <div id="body">
        This is the body to demonstrate Component Composition
    </div>
}
const Heading = () => {
    return <div>
        <h1 className='heading'>Hello from React!</h1>
        {Body()}
        <Body/>
        <Body></Body>
        </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)