import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <NavLink to={'/'} className={'btn'}>Back to home</NavLink>
        </div>
    );
};

export default Errorpage;