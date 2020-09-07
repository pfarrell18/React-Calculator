import React from "react";
import Key from "./Key";

const OperatorKey = ({number, handleClick}) =>{
    return <Key number = {number} onClick = {handleClick}/>
}

export default OperatorKey