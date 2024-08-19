import Link from 'next/link';
import React from 'react';

const aboutlayout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className='flex gap-5'>
                    <li><Link href="/about/mission">mission</Link></li>
                    <li><Link href="/vission">Vission</Link></li>
                </ul>
            </nav>
            { children }
        </div>
    );
};

export default aboutlayout;