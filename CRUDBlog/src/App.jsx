import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BlogListing from "./pages/BlogListing";
import EditBlog from "./pages/EditBlog";



function App() {
  return (
    <div className="container"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/blog/:slug" element={<Blog />}></Route> */}
          <Route path="/blog/:slug/:id" element={<Blog />}></Route>
          <Route path="/addblog" element={<AddBlog />}></Route>
          <Route path="/admin" element={<BlogListing />}></Route>
          <Route path="/editblog/:blogId" element={<EditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
