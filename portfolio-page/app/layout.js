import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSelector from "./components/LanguageSelector";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Andre Aguirre",
  description: "Portfolio personal de Andre Aguirre - Desarrollador Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <LanguageSelector />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
