import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const posts =async () => {
  const posts=await getAllPosts()
  console.log(posts);
  return (
    <div>
      <div className='text-4xl text-center'>All posts</div>
      <ul>
      {posts.map(post => (
        <li className='p-4 border-l-2 text-green-700' key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li> 
      ))}
    </ul>
    </div>
  );
};

export default posts;