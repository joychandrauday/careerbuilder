import React from 'react';

const Singlecat = ({category}) => {
    const {logo,category_name,availability}=category;
    return (
        <div className='block text-left m-2 bg-gray-200 p-8 rounded hover:bg-blue-600 hover:text-white'>
            <img className='w-16 p-2 bg-gray-400 rounded' src={logo} alt="" />
            <h1 className='font-bold mt-4 text-xl'>{category_name}</h1>
            <h2>{availability}</h2>
        </div>
    );
};

export default Singlecat;