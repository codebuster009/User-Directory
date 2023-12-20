import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const UserProfile = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
return(
    <>
    <h1>This is User Profile of {state.name} . Happy Coding</h1>
    <button onClick={() => navigate("/")}>Back</button>
    </>
)
}
export default UserProfile;