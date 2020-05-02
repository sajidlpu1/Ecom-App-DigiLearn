import React, { Component } from 'react'
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"
import {FaCartPlus} from 'react-icons/fa'


const getCaty = edgeItems => {
    //Here we are iterating through all the items in category Contentful
    let holdItems = edgeItems.map(edgeItems => {
        return edgeItems.node.category
    })

    let holdCategories = new Set(holdItems) //Here we select unique items from all
    let categories = Array.from(holdCategories) //and made them into array
    categories = ["All", ...categories]
    //...categories meand all the items in the category gets concat to all
    return categories
}

export default class Coursecart extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories : getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepallItemsSafe = [...this.state.courses]

        if (category === 'All')
        {
            this.setState(() => {
                return {mycourses: keepallItemsSafe}
            })
        }
        else
        {
            let filteredItems = keepallItemsSafe.filter(({node}) => node.category === category)
            this.setState(() => {
                return {mycourses : filteredItems}
            })
        }
    }

    render() {
        //console.log(this.state.courses);

        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses"/>
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map((category, index) => {
                                    return(
                                        <button type="button" className="btn bg-theme m-3 px-3 text-white"
                                        key={index}
                                        onClick={() => {
                                            this.catyClicked(category)
                                        }}
                                        >
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        {this.state.mycourses.map(({node})=> {
                            return(
                                <div
                                key={node.id}
                                className="col-11 col-md-6 d-flex mx-auto my-3">
                                    <Img fixed={node.image.fixed} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 text-success">${node.price}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description}</small>
                                        </p>
                                        <button
                                        className="btn yellow-btn snipcart-add-item"
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="https://digilearn.netlify.app/"
                                        data-item-image={node.image.fixed.src}>
                                        <FaCartPlus className="cart-icon"/>
                                        Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

