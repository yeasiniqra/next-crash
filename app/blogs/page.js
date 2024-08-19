import Link from 'next/link';
import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id : 1,
      title : "blog 1",
      desc : "blog 1 description"
    },
    {
      id : 2,
      title : "blog 2",
      desc : "blog 2 description"
    }
  ]
    return (
        <div>
           <ul>
            {
              blogs.map((blog) => 
                <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
              )
            }
           </ul>
        </div>
    );
};

export default Blogs;