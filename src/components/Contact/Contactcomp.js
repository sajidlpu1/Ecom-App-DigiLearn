import React from 'react'
import Heading from '../Reusable/Heading'


export default function Contactcomp() {
    return (
        <section className="py-5 bg-theme">
        <div className="col-10 col-sm-8 mx-auto">
            <form action="https://formspree.io/xlepernq" method="POST">
                <div className="form-group">
                    <input className="form-control" type="text" name="name" id="name" placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" name="email" id="email" placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="mobile" id="mobile" placeholder="Your Mobile"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" type="text" name="description" id="description" placeholder="Your Message"/>
                </div>
                <button type="submit" className="btn btn-dark btn-block">Submit</button>
            </form>
        </div>
        </section>
    )
}
