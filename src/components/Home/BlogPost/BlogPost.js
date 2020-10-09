import React from 'react';
import './BlogPost.css';

const BlogPost = ({blog}) => {
    return (
        <div className={`col-md-4 mt-5 single-card blog-${blog.background}`}>
            <div className="p-4 shadow-sm">
                <div className="container mt-5">
                    <div className="row">
                        <div className="author-img">
                            <img src={blog.authorImg} alt=""/>
                        </div>
                        <div className="author-deatil ml-3">
                            <p> {blog.author} </p>
                            <p> <small> {blog.date} </small> </p>
                        </div>
                    </div>
                </div>
                <h6 className="my-4"> {blog.title} </h6>
                <p> {blog.description} </p>
            </div>
        </div>
    );
};

export default BlogPost;