import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";


const RootLayout = ({ children }) => (
  <html lang="en">
    <head />
    <body>
      <div className="overflow-hidden">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </body>
  </html>
);

export default RootLayout;
