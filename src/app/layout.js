import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { ContactFormProvider } from "@/context/ContactFormContext";
import ContactFormModalWrapper from "@/components/ContactFormModalWrapper";
import FloatingButton from "@/components/FloatingButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export const metadata = {
  title: "Keshav Packers and Movers",
  description: "Reliable packers and movers in India.",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContactFormProvider>
          <Header />
          {children}
          <FloatingButton />
          <FloatingWhatsAppButton />
          <Footer />
          <ContactFormModalWrapper />
        </ContactFormProvider>
      </body>
    </html>
  );
}
