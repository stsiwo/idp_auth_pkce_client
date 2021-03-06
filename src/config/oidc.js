import { createUserManager } from 'redux-oidc';

const settings = {
  // the user manager settings for oidc-client
  authority: "http://localhost:5010",
  client_id: "spa.react",
  client_secret: "secret",
  redirect_uri: "http://localhost:8080/callback",
  response_type: "code",
  silent_redirect_uri: "http://localhost:8080/silent-renew",
  automaticSilentRenew: true,
  scope:"openid",
  post_logout_redirect_uri : "http://localhost:8080",
  filterProtocolClaims: true,
  loadUserInfo: true
};

const userManager = createUserManager(settings);

export default userManager;
