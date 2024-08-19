import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
          <nav>
            <ul className='flex gap-5 pb-4'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/posts">Posts</Link></li>
            </ul>
          </nav>
        </div>
    );
};

export default Header;