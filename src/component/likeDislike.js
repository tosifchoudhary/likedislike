import React from 'react'
import { useState } from 'react';
import './likeDislike.css';


function Status() {
    const [click,setClick]=useState(0)

    const increase=()=>{
        setClick(click+1)
    }
    const decrease=()=>{
        setClick(click-1)
    }
    const reset=()=>{
        setClick(0)
    }



  return (
    <>
    <body>
    <table>
        <tr>
            <td colSpan={3}>{click}</td>
           
        </tr>
    <tr>
        <td>Like</td>
        <td>Dislike</td>
        <td>Reset</td>
    </tr>
    <tr>
        <td><button onClick={increase}>Like</button></td>
        <td><button onClick={decrease}>Dsilike</button></td>
        <td><button onClick={reset}>Reset</button></td>
    </tr>
    </table>
    </body>
    </>
  )
}

export default Status