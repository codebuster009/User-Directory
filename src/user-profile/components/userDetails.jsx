import React from "react";
import "../css/userDetails.css"
import { useLocation } from "react-router-dom";
const UserDetails =() => {
    const {state} = useLocation()
    return(
        <div className="user-details">
        <div className="name">
            <h3>Name:{state.name}</h3>
            <h3>Username:{state.username}</h3>
            <h3>Catchphrase{state.company.catchPhrase}</h3>
        </div>
        <div className="address">
            <h3>{` Address:{state.address.city},${state.address.geo.lat},${state.address.geo.lng},${state.address.street},${state.address.suite}{state.addre,ss.zipcode}`}</h3>
            <h3>Email:{state.email}</h3>
            <h3>Phone No:{state.phone}</h3>
        </div>
        </div>
    )
}
export default UserDetails;

//<h3>{` Address:City=${state.address.city}, Lattitude= ${state.address.geo.lat}, Longitude= ${state.address.geo.lng}, Street = ${state.address.street}, Suite= ${state.address.suite}, Zipcode= ${state.address.zipcode}`}</h3>