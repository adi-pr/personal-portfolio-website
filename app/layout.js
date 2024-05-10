import { Inter } from "next/font/google";
import "./globals.css";

import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Prasad | Software Enginee",
  description: "Personal Portfolio built with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
