import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Welcome to Thankify</h1>
            <div className="line"></div>
            <div className="description">Your goto place for worker support and services!</div>
            <div className="posts">
                <ul className="posts_list">
                    <li className="post_item">
                        <div className="post_photo">Photo</div>
                        <div className="post_title">Title</div>
                        <div className="post_description">This is an example for a post made here!</div>
                        <div className="post_interaction">
                            <i className="icon-user"></i>
                            <i className="icon-arrow-up"></i>
                            <i className="icon-arrow-down"></i>
                            <i className="icon-share"></i>
                        </div>
                    </li>
                    <li className="post_item">
                        <div className="post_photo">Photo</div>
                        <div className="post_title">Title</div>
                        <div className="post_description">This is an example for a post made here!</div>
                        <div className="post_interaction">
                            <i className="icon-user"></i>
                            <i className="icon-arrow-up"></i>
                            <i className="icon-arrow-down"></i>
                            <i className="icon-share"></i>
                        </div>
                    </li>
                    <li className="post_item">
                        <div className="post_photo">Photo</div>
                        <div className="post_title">Title</div>
                        <div className="post_description">This is an example for a post made here!</div>
                        <div className="post_interaction">
                            <i className="icon-user"></i>
                            <i className="icon-arrow-up"></i>
                            <i className="icon-arrow-down"></i>
                            <i className="icon-share"></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="ad_position">
                Ad Spot
            </div>
        </div>
    );
}

export default Home;