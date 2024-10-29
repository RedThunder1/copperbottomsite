import React from 'react'
import  './Support.css'

function Support() {
    return (
        <div className="Support">
            <h1>Support</h1>
            <div className="line"></div>
            <p className="desc">Have any issues or questions? Send us an email with the form below!</p>
            <form className="email_form">
                <input className="form_input" placeholder="Email" />
                <input className="form_input" placeholder="Subject" />
                <input className="form_input" id="body_input" placeholder="Body" />
                <input className="form_input" type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Support;