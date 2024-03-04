import Link from 'next/link';
import React from 'react';

const page = () => {
  const Blogs = [{
    id:1,
    title: 'blog 1',
    description: 'blog 1 description'
  },
  {
    id:2,
    title: 'blog 2',
    description: 'blog 2 description'
  },{
    id:3,
    title: 'blog 3',
    description: 'blog 3 description'
  }]
  return (
    <main className="mt-20 text-3xl">
      <div className='text-red-600'>Blogs</div>
      <ul>
        { Blogs.map(blog =>
        <li className='mb-5' key={blog.id}>
          <Link href={`/blog/${blog.id}`}> {blog.title} 
          </Link>
          </li> )}
      </ul>
    </main>
  );
};

export default page;