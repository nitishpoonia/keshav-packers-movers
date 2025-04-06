import Header from "../components/Header";
import Footer from "../components/Footer";
import { LocationProvider } from "../context/LocationContext";
import "./globals.css";


export const metadata = {
  title: "Keshav Packers and Movers",
  description: "Reliable packers and movers in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocationProvider>
          <Header />
          {children}
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
