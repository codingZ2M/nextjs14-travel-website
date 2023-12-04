import Link from 'next/link';
import {blogPosts} from "../../util/blogPosts"
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoDocumentsOutline } from "react-icons/io5";

const TravelBlog = () => {

  return (
        <section className='flex items-center justify-center mt-6 md:mt-10 mb-10 md:mb-20'>
           
            <div className='flex flex-col container max-auto'>
              
                <div className='flex gap-2 items-center mb-0 md:mb-2 pl-4'>
                    <h2 className="text-2xl md:text-4xl font-normal">Travel Blog</h2>
                    <IoDocumentsOutline className='w-8 h-8 text-[#055ba6]'/>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogPosts.map((post) => (
                          <Link href={`/travel-blog/${post.id}`}>
                              <div key={post.id} className="p-4  mb-4">
                                  <img src = {post.image} alt={`Tour ${post.id}`} className="w-full h-52 object-cover pb-2"  />
                                  <h2 className="text-xl font-normal mb-2">{post.title}</h2>
                                  <div className="flex items-center text-gray-500 mb-2">
                                      <FaRegCalendarAlt className="mr-2" />
                                      <p>{post.date}</p>
                                  </div>
                                  <div className="text-base mb-2 text-justify truncate">
                                    {post.description}
                                  </div>
                                  <Link href={`/travel-blog/${post.id}`}  className="text-blue-500 hover:text-blue-700">
                                      Read More
                                  </Link>
                              </div>
                          </Link>
                    ))}
                </div>

            </div>       
        </section>
   )
}

export default TravelBlog

