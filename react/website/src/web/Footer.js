import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
    let color = {
       
        top: "100vh",
        width: "100%",
        height: "50px"
    }
    return (
        <div className="bg-dark text-light" style={color}>
            <div className="text-center"> {props.show ? <p>this is a footer</p> : "something wrong"}</div>

        </div>
    )
}