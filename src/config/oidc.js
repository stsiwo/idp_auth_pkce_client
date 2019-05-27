import { createUserManager } from 'redux-oidc';

const settings = {
  // the user manager settings for oidc-client
  authority: "http://localhost:5000",
  client_id: "spa.react",
  redirect_uri: "http://localhost:8080/callback",
  response_type: "password",
  silent_redirect_uri: "http://localhost:8080/silent-renew",
  scope:"openid",
  post_logout_redirect_uri : "http://localhost:8080/signin",
};

const userManager = createUserManager(settings);

export default userManager;
