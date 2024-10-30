import React from "react";

export default function Converter(){
    const style1={
        backgroundColor: "red",
        fontSize: "30px",
        textAlign: "center",
        height: "50px",
        width: "300px",
        border: "5px solid black",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontStyle: ""
    }

    const style2={
        color: "white",
        backgroundColor: "black",
        borderRadius: "10px",
        border: "3px solid purple"
    }

    const returnPostfixExpression=()=>{
        const val = document.getElementById("inp").value;
        console.log(val);
    }

    return (
        <div style={{textAlign: "center", backgroundColor: "grey", display:"flex", justifyContent:"center", flexDirection:"column", alignItems: "center", padding: "10px", height: "500px", width: "500px"}}>
            <input type="text" name="inputexp" id="inp" style={style1}/>
            <br />
            <button className="getexp" style={style2} onClick={returnPostfixExpression}>Get Postfix Expression</button>
        </div>
    );
}