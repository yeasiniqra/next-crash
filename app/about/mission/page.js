
import Button from '@/app/component/button/Button';
import Image from 'next/image';
import React from 'react';
import bnr from '@/public/images/bnr.jpg'

const mission = () => {
    return (
        <div>
            <h1>This is mission</h1>
            <div className="w-[300px]">
               <Image placeholder="blur" src={bnr} alt='bnr image' />
            </div>
            <Button />
        </div>
    );
};

export default mission;