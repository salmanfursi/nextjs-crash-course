import { notFound } from 'next/navigation';
import React from 'react';

const page = ({params}) => {
  const {id}=params;
  if(id === '4'){
    notFound()
  }
  return (
    <div className='text-red-500 mt-5 text-4xl'>
      The blog id is {id}
    </div>
  );
};

export default page;