import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus est quibusdam sequi ab cumque. Repudiandae soluta,
                reiciendis iste incidunt fuga ipsa mollitia repellat iure distinctio ipsum tempora eligendi explicabo dolor.
            </p>
            <p> Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;