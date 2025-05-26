import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Le Salama Marrakech",
  description: "Rooftop & Sky Bar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
