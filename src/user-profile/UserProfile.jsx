import React from "react";
import { useLocation} from "react-router-dom";
import Clock from "./components/Clock";
import UserDetails from "./components/userDetails";
import Post from "./components/Post";
const UserProfile = () => {
    const {state} = useLocation();
return(
    <>
    <Clock/>
    <UserDetails/>
    {state.post.map((post)=> {
        return <div>
        <Post Post = {post}/>
        </div>
    })}
    </>
)
}
export default UserProfile;