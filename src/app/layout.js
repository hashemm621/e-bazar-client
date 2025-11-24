import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: "E-Bazar",
  description: "This is online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
