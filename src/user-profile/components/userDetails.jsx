import React from "react";
import "../css/userDetails.css";
import { useLocation } from "react-router-dom";
const UserDetails = () => {
  const { state } = useLocation();
  return (
    <div className="user-details">
      <div>{state.name}
      <div className="username-catch">
        {state.username}
        {state.company.catchPhrase}
      </div>
      </div>
      <div>
        {`${state.address.city},${state.address.geo.lat},${state.address.geo.lng},${state.address.street},${state.address.suite},${state.address.zipcode}`}
      <div className="email-phone">
        Email:{state.email}
        Phone No:{state.phone}
      </div>
      </div>
    </div>
  );
};
export default UserDetails;

//<h3>{` Address:City=${state.address.city}, Lattitude= ${state.address.geo.lat}, Longitude= ${state.address.geo.lng}, Street = ${state.address.street}, Suite= ${state.address.suite}, Zipcode= ${state.address.zipcode}`}</h3>
