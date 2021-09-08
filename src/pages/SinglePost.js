import React from "react";
import { Link } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const SinglePost = ({ posts, match, edit, deleteTodo }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const post = posts.find((post) => post.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <button onClick={(event) => edit(post)}>Edit</button>
      <button onClick={(event) => deleteTodo(post)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;