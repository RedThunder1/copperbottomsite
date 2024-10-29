import React from 'react'
import './Posts.css'

function Posts() {
    return (
        <div className="posts_div">
            <input className="posts_input" type="text" placeholder="Explore Posts and Users"></input>
            <div className="line"></div>
            <p className="featured">Featured Posts</p>
            <div className="posts" id="posts">
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

export default Posts;