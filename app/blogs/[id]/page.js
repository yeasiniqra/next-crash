
import { notFound } from 'next/navigation';
import React from 'react';

const SingleBlog = ({params}) => {
    const { id } = params;
    if(id === '3'){
        notFound();
    }
    return (
        <div>
            <h2>This is id: {id}</h2>
        </div>
    );
};

export default SingleBlog;
