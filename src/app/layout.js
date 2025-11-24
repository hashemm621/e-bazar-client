import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Bazar",
  description: "This is online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={roboto.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
