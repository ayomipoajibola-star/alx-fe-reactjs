import React, { useContext } from 'react';
import UserContext from '../UserContext'; // adjust path if needed

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

const UserProfile = (props) => {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", borderRadius: "5px" }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;