'use client';

import PropTypes from 'prop-types';
import { Auth0Provider } from '@auth0/nextjs-auth0/client';

function Auth0ProviderWrapper({ children }) {

  
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

  if (!domain || !clientId) {
    console.warn('Auth0 domain or client ID is missing. Check your environment variables.');
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
}

Auth0ProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth0ProviderWrapper;
