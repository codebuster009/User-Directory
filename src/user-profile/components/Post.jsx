import React from "react";
import "../css/post.css"
const Post = (props) => {
    console.log(props.Post.title)
return (
    <div className="user-post">
    <div>Title:{props.Post.title} </div>
    <div>Content:{props.Post.body}</div>
    </div>
)
}
export default Post;