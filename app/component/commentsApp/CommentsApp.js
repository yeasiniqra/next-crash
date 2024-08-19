import React from 'react';

const CommentsApp = async ({comments}) => {
    return (
        <div>
            <div className='my-4'>
            <h1 className='font-bold text-xl'>Comments :</h1>
                {
                    comments.map((cmt) => 
                        <div key={cmt.id}>{cmt.body}</div>
                    )
                }
            </div>
        </div>
    );
};

export default CommentsApp;