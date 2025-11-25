import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <div className="sticky top-0 z-50">
          <Navbar/>
        </div>
        {children}

        <Footer/>
        </body>
    </html>
  );
}
