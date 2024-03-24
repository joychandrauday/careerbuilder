import React, { useEffect, useState } from 'react';
import Singlecat from '../Singlecat/Singlecat';

const Categories = () => {

    const[categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
            .then(res=> res.json())
            .then(data=> setCategories(data))
    },[])

    return (
        <div className='my-24'>
            <h1 className="text-4xl capitalize font-bold">job Category list.</h1>
            <p className="text-gray mt-4 capitalize text-lg">search your desired job from 20+ categories.</p>
            <div className="categories my-8 lg:grid grid-cols-4">
                {
                    categories.map(category=><Singlecat key={category.id} category={category}></Singlecat>)
                }
            </div>
        </div>
    );
};

export default Categories;