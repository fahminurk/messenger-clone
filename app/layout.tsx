import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/toasterContext";
import AuthContext from "./context/authContext";
import ActiveStatus from "./components/activeStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "messanger clone",
  description: "messanger clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
