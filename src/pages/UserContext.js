import { Auth0Provider } from "@auth0/auth0-react";

const UserContext = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-lbjqrfjdhql32sh3.us.auth0.com"
      clientId="d5yaT2kgGJmbuvmRqNJfCZJkQIlL1zO6"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default UserContext;
