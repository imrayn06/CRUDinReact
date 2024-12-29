import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Blog = () => {
  const { slug, id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (post.userId) {
      // Fetch user data only when userId is available
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch user");
          }
          return res.json();
        })
        .then((data) => setUser(data))
        .catch((err) => setError(err.message));
    }
  }, [post.userId]);

  if (loading) {
    return (
      <div className="container">
        <Header />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="card">
        <div className="card-header">
          Author - <b>{user.name || "Unknown"}</b> From:{" "}
          {user.address?.city || "Unknown"}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <a href="/" className="btn btn-primary">
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
