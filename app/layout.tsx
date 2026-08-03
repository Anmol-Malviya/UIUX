import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anmol Malviya — Product Engineer & Project Manager",
  description: "A storytelling portfolio featuring product systems, engineering work, and project leadership.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
