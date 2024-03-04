import React from 'react';

const getPost =async (id) => {
  const result =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  if(!result.ok){
    throw new Error('there was an error fetching posts')
  }
  return result.json()
  

};

export default getPost;