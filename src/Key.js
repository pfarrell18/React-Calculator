import React from 'react'

const Key = ({number,handleClick, className}) => {
    return(<button onClick ={handleClick} className={className ? "operator": "numberkey"}>
        {number}
    </button>)
}

export default Key