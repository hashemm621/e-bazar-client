import { initAuth0 } from '@auth0/nextjs-auth0';


export const auth0 = initAuth0({
  // ফায়ারবেস সিক্রেট, সেশন কুকি এনক্রিপশনের জন্য ব্যবহৃত
  secret: process.env.AUTH0_SECRET,
  
  // আপনার অ্যাপ্লিকেশনের বেস URL (যেমন: http://localhost:3000)
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL, 
  
  // Auth0 অথরাইজেশন সার্ভারের URL
  issuerBaseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  

  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  

  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  
  
});

