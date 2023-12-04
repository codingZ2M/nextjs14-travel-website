"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {blogPosts} from "../../../util/blogPosts"

// Define an interface for the params object
interface BlogParams {
    blogId: number;
  }
  
  // "params" prop should be an object with a property named blogId of type string, 
  // according to the BlogParams interface.
  const BlogPost = ({ params }: { params: BlogParams }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    // useEffect to update selectedPost when blogID changes
  React.useEffect(() => {
    const post:any = blogPosts.find((post) => post.id == params.blogId);
    setSelectedPost(post);
  }, [ params.blogId]);

  if (!selectedPost) {
    return <div className="text-2xl text-red-500 p-10">Blog post not found!</div>;
  }

    return (
      <section className='flex justify-center items-center mt-2 md:mt-10 mb-10 md:mb-20'>
          <div className="container bg-white rounded-lg shadow-lg p-8 mx-auto">
              
              <div className='flex flex-col gap-1 items-start mb-6 ml-2'>
                  <span className="text-xl font-normal">{selectedPost.title}</span>
                  <span className='text-sm'>{selectedPost.date} </span>
               </div>

              <div className="flex flex-col mb-8">
                  <Image src = {selectedPost.image} alt={`Tour ${selectedPost.id}`} className="w-full h-52 object-cover"  width={1800} height={200}/>
                  <div className="p-4  bg-white rounded-md border border-gray-300">
                      <div className="text-gray-700 text-base w-full text-justify mb-6">
                          {selectedPost.description}
                      </div>
                  </div>
              </div>
      
          </div>
      </section>
    );
  };
  
  export default BlogPost;