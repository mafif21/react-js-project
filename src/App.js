import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <div className="app">
      <div className="brand">Bloggy</div>
      <nav className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="profile" className="nav-item">
          Profile
        </Link>
        <Link to="blog" className="nav-item">
          Blog
        </Link>
        <Link to="contact" className="nav-item">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/blogdetail/:id" element={<BlogDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
