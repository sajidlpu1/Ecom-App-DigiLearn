import React from 'react'
import Layout from '../layout'

export default function Footer({props}) {
    // props is carrier check Layout.js
    return (
        <footer>
            <div className="footer-block">
            <div className="container-fluid">
            <div className="row">
            <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
            <h6>Awesome Copyright ©️: {props} </h6>
            </div>
            </div>
            </div>
           </div>
        </footer>
    )
}
