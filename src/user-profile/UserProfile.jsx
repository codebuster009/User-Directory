import React from "react";
import { useLocation} from "react-router-dom";
import Clock from "./components/Clock";
import UserDetails from "./components/userDetails";
import Post from "./components/Post";
//import './css/userProfile.css'
const UserProfile = () => {
    const {state} = useLocation();
return(
    <>
    <div className="layout">
    <Clock/>
    <UserDetails/>
    <div className="post-layout">
    {state.post.map((post)=> 
        <Post Post = {post}/>
    )}
    </div>
    </div>
    </>
)
}
export default UserProfile;