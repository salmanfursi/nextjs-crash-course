import Image from 'next/image';
import React from 'react';
import salmanimg from './../../../public/images/salmanimg.jpg';
import Button from '@/app/components/Button';

const page = () => {
  return (
    <main className="mt-20 text-3xl">
    <div className='text-3xl'>Mission page</div>
    <div>
    salma and adkjf sdjlsalma and adkjf sdjlsalma and a
    <Image
    className='mt-4'
        src={salmanimg}
        alt="My beautiful image"
      />

    </div>
  <Button />

    </main>
  );
};

export default page;