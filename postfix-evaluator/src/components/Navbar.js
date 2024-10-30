import React from 'react'

export default function Navbar(){
    const style1={backgroundColor: "orange", display: "flex", padding: "10px", height: "50px", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontWeight: "bolder", alignItems: "center", justifyContent: "space-between"}
    const style2={color: "white", backgroundColor: "black", border: "5px solid purple", borderRadius: "10px"}

    const hello=()=>{
        console.log("Hello");
    }

    return (
        <div className="navbar" style={style1}>
            <h2>The Postfix Checker</h2>
            <button style={style2} onClick={hello}><h4>Enable Dark Mode</h4></button>
        </div>

        
    );
}