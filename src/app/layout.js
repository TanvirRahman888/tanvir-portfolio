
import { ThemeProvider } from "@/components/shared/theme-provider"
import "./globals.css"


export const metadata = {
  title: "Tanvir Portfolio",
  description: "Portfolio of Md Tanvir Rahman",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}