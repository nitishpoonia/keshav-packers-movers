import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { ContactFormProvider } from "@/context/ContactFormContext";
import ContactFormModalWrapper from "@/components/ContactFormModalWrapper";
import FloatingButton from "@/components/FloatingButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export const metadata = {
  title: "Reliable Packers and Movers Services – Keshav Packers and Movers",
  description:
    "Keshav Packers and Movers ensures smooth home and office relocation with expert packing, secure transport, and timely delivery across major cities in India.",
  icons: {
    icon: "/public/favicon.ico",
  },
  alternates: {
    canonical: "https://keshavpackersmovers.com",
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
