import React from 'react'
import PropTypes from 'prop-types'


export default function Header(  props) {
    let styles = {
        paddingLeft : "10%",
        borderBottom:"3px solid green"

    }
    return (
       <div><h1 style={styles}> hello, world {props.title} </h1></div>
           
       
          
       
    )
}
