import React from "react";
import "../css/post.css"
const Post = (props) => {
    console.log(props.Post.title)
return (
    <div className="user-post">
    <h3>Title:{props.Post.title} </h3>
    <h3>Content:{props.Post.body}</h3>
    </div>
)
}
export default Post;