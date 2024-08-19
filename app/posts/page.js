import allPost from '@/lib/allPost/allPost';
import Link from 'next/link';
import React from 'react';

const AllPosts = async () => {
  const blogs = await allPost();

    return (
        <div>
           <ul>
            {
              blogs.map((blog) => 
                <li key={blog.id}><Link href={`/posts/${blog.id}`}>{blog.title}</Link></li>
              )
            }
           </ul>
        </div>
    );
};

export default AllPosts;