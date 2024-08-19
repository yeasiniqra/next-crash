'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Button = () => {
    const router = useRouter();
    return (
        <div>
            <button onClick={() => router.push('/')} className='border p-2 mt-2'>Click Here</button>
        </div>
    );
};

export default Button;