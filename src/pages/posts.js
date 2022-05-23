import React, { useState } from "react";
import Footer from "../components/footer";
import FbPosts from "../components/fb-posts";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";

const PostsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div style={{ height: "500px" }} className="center-align">
        <FbPosts className="fb-posts  center-align" />
      </div>
      <h1 className="center-align">
        Swipe to checkout our recent posts on Facebook!
      </h1>
      <Footer />
    </div>
  );
};

export default PostsPage;
