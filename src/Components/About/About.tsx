import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <h1>We are Copperbottom</h1>
            <div className="line"></div>
            <div className="mission-statement"> Our value as a company is to find a need in our society and fix it.
                When it comes to technology and ethics, there is a catchup that needs to desperately happen.
                Worker’s rights are falling further and further behind and our company can build a better future by investing in those
                laborers that are the foundation of our workforce and ensure that every voice is properly heard.</div>
            <div className="services">
                <p>We aim to provide resources to support workers in the industry such as,</p>
                <p>    - Support and resources for workers to unionize.</p>
                <p>    - Tipping directly to worker who will receive the full amount.</p>
                <p>    - Support for delivery drivers with reviews of customers and other resources.</p>
            </div>
        </div>
    );
}

export default About;