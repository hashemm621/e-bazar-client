'use client';
import { Auth0Provider } from '@auth0/nextjs-auth0/client';

const Auth0ProviderWrapper = ({ children }) => (
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
    }}
  >
    {children}
  </Auth0Provider>
);

export default Auth0ProviderWrapper;
