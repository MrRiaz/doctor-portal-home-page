import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="text-center">
            <h2>Page not found</h2>
            <p>404 error!</p>
            <Link to="/home">
                <button className="btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default NoMatch;