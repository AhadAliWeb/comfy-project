import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(user);
  return <></>;
};
export default Profile;
