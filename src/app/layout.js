import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "Tanvir Portfolio",
  description: "Portfolio of Md Tanvir Rahman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
