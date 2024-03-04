import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComment';
import React, { Suspense } from 'react';

export async function generateMetadata({ params }) {
  // read route params
  const { id } = params
  const post = await getPost(id)

  return {
    title: post.title,
    description: post.body
  }
}



const postPage = async ({ params }) => {
  const { id } = params;

  const commentsPromise = getPostComments(id)
  const post = await getPost(id)
  // const comments =await getPostComments(id)
  // const post =await postPromise

  // const [post, comments] = await Promise.all([postPromise, commentsPromise])
  //promise all is an method use to show data of two asyncronus function simultenously
  return (
    <div>
      <div className='text-3xl'>{post.title}</div>

      <p className='mt-4 text-2xl'>{post.body}</p>

      {/* <div className="mt-10">
        <h1>Comments:</h1>
        <ul >
          {comments.map(comment => <li className='p-2' key={comment.id}>{comment.body}</li>)}
        </ul>
      </div> */}

      <Suspense fallback='Loading...'>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
};




 
export async function generateStaticParams(){
  const posts=await getAllPosts();
  return posts.map(post =>({
    id:post.id.toString()
  }))
};


