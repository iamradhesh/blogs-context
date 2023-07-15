import  { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import "./Blogs.css";
import Spinner from './Spinner';

function Blogs() {
  
  //consume Data
  const {loading,posts}=useContext(AppContext);  
  
  console.log("printing inside blog");
  console.log(posts);
  
  return (
    <div  className="flex flex-col gap-y-10 my-4">
        {loading ?(
          <div className="min-h-[80vh] w-full flex justify-center items-center">
              
                <p className="text-center font-bold text-3xl">Loading...</p>
              <Spinner/>
          </div>
        ):
          posts.length===0 ?
              (<div className="min-h-[80vh] w-full flex justify-center items-center">
                  <p className="text-center font-bold text-3xl">No Blog found !</p>
              </div>): (posts.map((post)=>(
                <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
                  <title className="font-bold text-lg">{post.title}</title>
                  <p className="text-sm my-1">
                    By <span className="italic">{post.author}</span> on{" "} 
                    <span className="font-semibold underline cursor-pointer">{post.category}</span>
                  </p>
                  <p className="text-sm">
                    Posted on {post.date}
                  </p>
                  <p className="mt-4 mb-2">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-x-2 items-center">
                    {post.tags.map((tag,index)=>(
                       <span 
                       key={index}
                       className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
                    ))}
                  </div>
                </div>
              )))
            
          
        }  
    </div>
  );
}

export default Blogs;
