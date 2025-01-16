import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sports Facility",
  description: "Elevate Your Game with World-Class Court Surfaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto bg-background-default text-white 2xl:w-4/5">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
