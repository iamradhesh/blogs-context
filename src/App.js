import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";


export default function App() {

      console.log("I am inside app");
     
      return(
                <div>
                    <Header/>
                    <Blogs/>
                    <Pagination/>
                </div>
      )
}
