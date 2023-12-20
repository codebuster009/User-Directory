import React from "react";
import UserDirectory from "../directory/Directory";
import "./user.css"
const User= (props) => {
    const {user} = props
    console.log(props)
    return(
        <div className="user-card">
            <h3 className="h3-name">Name: {user.name}</h3>
            <h3 className="h3-name">Post: {user.numberOfPost}</h3>
        </div>
    )
}
export default User;