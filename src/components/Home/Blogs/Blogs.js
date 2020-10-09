import React from 'react';
import './Blogs.css';
import ellipe1 from '../../../images/Ellipse 1.png';
import ellipe4 from '../../../images/Ellipse 4.png';
import BlogPost from '../BlogPost/BlogPost';

const blogsData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Rashed Kabir',
        authorImg : '',
        date : '23 April 2019',
        background : 'green'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Caudi',
        authorImg : ellipe1,
        date : '23 April 2019',
        background : 'blue'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. John Mitchel',
        authorImg : ellipe4,
        date : '23 April 2019',
        background : 'blue'
    },
]

const Blogs = () => {
    return (
        <section className="blog-section pt-5">
            <div className="container-fluid mt-5">
                <div className="blog-header text-center">
                    <h6 className="h6-header">OUR BLOG</h6>
                    <h2 className="h2-header">From Our Blog News</h2>
                </div>
                <div className="row">
                    {
                        blogsData.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;