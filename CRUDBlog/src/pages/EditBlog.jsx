import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate(); 
  const { blogId } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        setTitle(json.title);
        setDescription(json.body);
      });
  }, [blogId]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Please provide a title");
      return;
    }
    if (description.trim() === "") {
      alert("Please provide a description");
      return;
    }

    const blog = {
      title: title.trim(),
      body: description.trim(),
      userId: 1,
    };

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to update the blog");
        }
      })
      .then((json) => {
        console.log("Blog updated:", json);
        setSuccess(true);
        setLoading(false);
        setError("");
        
        setTimeout(() => {
          navigate("/"); // Redirect to home after 5 secs
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to update the blog");
        setSuccess(false);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mb-4">Edit Blog</h2>
        {success && (
          <div className="alert alert-success">Blog updated successfully!</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleUpdate}>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Blog Title</label>
            <div className="col-sm-10">
              <input
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                type="text"
                className="form-control"
                id="title"
                value={title}
                placeholder="Enter blog title"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Blog Description</label>
            <div className="col-sm-10">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                className="form-control"
                id="description"
                value={description}
                placeholder="Enter blog description"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading ? true : false}
          >
            {loading ? "Loading..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
