import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { truncate, makeTitle } from "../utils/utils";
import Footer from "../components/Footer";

const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setError("Failed to load posts"));
  }, []);

  function handleDelete(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE", // Fake simulation
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post deleted:", id);
          // Remove the post from the UI by filtering it out from the state
          setPosts(posts.filter((post) => post.id !== id));
          setSuccessMessage("Post deleted successfully!");
        } else {
          throw new Error("Failed to delete the post");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to delete the post");
      });
  }

  return (
    <div>
      <Header />
      <div className="container">
        {/* Success or error messages */}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>{truncate(post.title, 20)}</td>
                  <td>{truncate(post.body, 50)}</td>
                  <td>
                    <Link to={`/editblog/${post.id}`} className="btn">
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="btn"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default BlogListing;
