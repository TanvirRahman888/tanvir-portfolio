"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Download } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        link.href.replace("#", "")
      )

      for (const section of sections) {
        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur bg-gray-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-linear-to-r from-purple-500 to-blue-500 text-white font-bold">
            TR
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">
            Tanvir Rahman
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right side (desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          <Button className="rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white">
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-70">
              <div className="mt-10 flex flex-col gap-5">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "")
                  const isActive = activeSection === sectionId

                  return (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-base font-medium ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  )
                })}

                <Button className="mt-4 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white">
                  Download Resume
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}