import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext=createContext();

export default function AppContextProvider({children}){

        const [loading,setLoding]=useState(false);
        const [posts,setPost]=useState([]);
        const [page, setPage]=useState(1);
        const [totalPages,setTotalPages]=useState(null);

    console.log("inside fetch request");
    console.log(baseUrl);
    
    async function fetchBlogPost(page=1){
        setLoding(true);
        let url=`${baseUrl}?page=${page}`
        try{
                const result= await fetch(url)
                const data=await result.json();
                if (!data.posts || data.posts.length === 0)
                   {
                     throw new Error("Something Went Wrong");
                   }
                console.log("Api Response", data);
                

                setPage(data.page);
                setPost(data.posts);
                setTotalPages(data.totalPages);
        }
        catch(error)
        {
                alert(error.message);
                console.log({"error message": error.message});
                setPage(1);
                setPost([]);
                setTotalPages(null);
        }

        setLoding(false);
    }

    

    function handlePageChange(page)
    {
        setPage(page);
        console.log(page);
        fetchBlogPost(page);
    }


        const value={
            posts,
            setPost,
            loading,
            setLoding,
            page,
            setPage,
            totalPages,
            setTotalPages,
            fetchBlogPost,
            handlePageChange
        };


        return <AppContext.Provider value={value}> {children} </AppContext.Provider>
        

}