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
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                    </div>
                    <div className="col-4">

                    <div className="card bg-dark">
                    <img src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="card-img-top" alt="Card Image here"/>

                    <div className="card-body">
                        <h5 className="card-title text-success">Just Click photos</h5>
                        <p className="card-text text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <a href="#" className="btn btn-warning btn-block">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
