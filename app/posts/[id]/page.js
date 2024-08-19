
import CommentsApp from '@/app/component/commentsApp/CommentsApp';
import allPost from '@/lib/allPost/allPost';
import getAllComments from '@/lib/allPost/getComments';
import getPost from '@/lib/allPost/getPost';
import React, { Suspense } from 'react';

//Daynamic meta dewar jonno generateMetadata use kra hoy
export async function generateMetadata({ params }) {
    const {id} = params;
    const {title, body} = await getPost(id);

    return {
      title: title,
      description : body,
    }
  }
   

const singlePost = async ({params}) => {
    const {id} = params;
    const {body, title} = await getPost(id);
    const comments = await getAllComments(id);

    return (
      <>
        <div>
            <h2>This is id : {id}</h2>
            <h2 className='font-bold my-3'>{title}</h2>
            <h2>User description : {body}</h2>
        </div>
        <hr className='border border-black' />
        <Suspense fallback="<h2>Loading Comments...</h2>">
          <CommentsApp comments={comments} />
        </Suspense>

      </>  
    );
};

export default singlePost;

// post static vba genarate korar jonno generateStaticParams use kora hoy 
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await allPost();
 
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}
 

