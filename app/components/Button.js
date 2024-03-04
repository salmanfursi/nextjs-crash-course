'use client'
import React from 'react';

const Button = () => {
  return (
    <div className='mt-5'>
      <button className='bg-green-500 rounded-sm p-8' onClick={() => console.log('I have clicked')}>
        Click hare
      </button>
    </div>
  );
};

export default Button;