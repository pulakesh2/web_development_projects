import React from 'react'
import Child from './Child'
export default function Content(props) {
    let styles = {
        paddingLeft : "10%"
    }
    return (
        <div style={styles}>
            <h2>your Details</h2>
            {props.works.length===0? "file is empty":
            //map is used for looping and work should be same name
               props.works.map((work) => {
                return    <Child person={work} onDelete = {()=>{props.onDelete(work)}} />
            })}
             
                  
            
        </div>
    )
}
