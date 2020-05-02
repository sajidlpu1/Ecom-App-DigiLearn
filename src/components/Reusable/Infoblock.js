import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'

export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        DigiLearn is an American online learning platform aimed at professional adults and students, developed in May 2010. As of Jan 2020, the platform has more than 50 million students and 57,000 instructors teaching courses in over 65 languages. There have been over 295 million course enrollments. Students and instructors come from 190+ countries and 2/3 of students are located outside of the U.S. Udemy also has over 5,000 enterprise customers and 80% of Fortune 100 companies use Udemy for employee upskilling.
                        </p>
                        <Link to="/about/">

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
