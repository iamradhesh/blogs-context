import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";


export default function App() {

      

      const {fetchBlogPost}=useContext(AppContext);
      
      useEffect(() => {
        // Fetch the inital Blogposts data
        fetchBlogPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
     
      return(
                <div>
                    <Header/>
                    <div className="my-[100px]">
                        <Blogs/>
                        <Pagination/>
                    </div>
                    
                </div>
      );
}
