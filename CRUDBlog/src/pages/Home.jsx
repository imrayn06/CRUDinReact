import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { truncate, convertToSlug } from "../utils/utils";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="container mb-5">
          <h1>Blog Your Content Here ...</h1>
        </div>
        <div className="row">
          {posts.map((post) => {
            return (
              <div key={post.id} className="col-md-4 mb-4">
                <Link to={`/blog/${convertToSlug(post.title)}/${post.id}`}>
                  {/*string interpolation*/}
                  {/*sending title in slug makes url encoded*/}
                  {/*SO I create a manual function to avoid encoding */}
                  <div className="card" style={{ height: "100%" }}>
                    <div className="card-body">
                      <h5 className="card-title">{truncate(post.title, 30)}</h5>
                      <p className="card-text">{truncate(post.body, 100)}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
