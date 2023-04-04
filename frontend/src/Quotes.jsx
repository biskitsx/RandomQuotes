import axios from 'axios';
import React, { useState } from 'react'

function Quotes() {
    const [text,setText] = useState('sawas');
    const [author,setAuthor] = useState('');


    function getQoutes(){
        fetch('http://localhost:1000')
            .then(res=>res.json())
            .then(data=>{
                setText(data.text);
                setAuthor(data.author);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <button onClick={getQoutes}>
                Get Quote
            </button>

            <h1>{text}</h1>
            <h3>{author}</h3>
        </div>
    )
}

export default Quotes