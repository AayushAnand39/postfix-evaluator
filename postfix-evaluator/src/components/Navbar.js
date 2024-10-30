import React from 'react'

export default function Navbar(){
    return (
        <div className="navbar" style={{backgroundColor: "orange", display: "flex", padding: "10px", height: "50px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontWeight: "bolder", alignItems: "center", justifyContent: "space-between"}}>
            <h2>The Postfix Checker</h2>
            <button style={{color: "white", backgroundColor: "black", border: "5px solid purple", borderRadius: "10px"}}><h4>Enable Dark Mode</h4></button>
        </div>

        
    );
}