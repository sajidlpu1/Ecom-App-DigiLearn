import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'


export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">
                    I’m extremely proud and happy to make a huge announcement.

As the technical founder of WP Engine, and the founder of several startups before WP Engine, it is my honor and privilege to do what I love for a living — inventing and building products that people actually want.<br/>

As the CEO of WP Engine for the past three years, it’s also been my honor and privilege to have worn all the other hats, not just writing code. <br/> For more than a year, I was also marketing, finance, HR, and the janitor.

I love that too — doing lots of different things, every day different, every day a struggle and many days difficult, but in the good way, like when you have a great work-out and the next day you’re sore but happy.
                    </p>
                    </div>
                    <div className="col-4">

                    <div className="card bg-dark">
                    <img src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=515&q=80"
                    className="card-img-top" alt="Card Image here"/>

                    <div className="card-body">
                        <h5 className="card-title text-success text-center">FOUNDER & CEO</h5>
                        <p className="card-text text-white">
                        </p>

                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
