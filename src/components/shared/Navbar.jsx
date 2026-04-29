"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Download } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const resumeLink =
  "https://drive.usercontent.google.com/u/0/uc?id=1kIzq-NLLtdxuaCITa4-28bNKAgkniH3r&export=download"

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      for (const link of navLinks) {
        const section = document.getElementById(link.href.replace("#", ""))

        if (section) {
          const rect = section.getBoundingClientRect()

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.href.replace("#", ""))
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-3">
      <nav
        className={`mx-auto transition-all duration-300 ${
          isScrolled
            ? "max-w-7xl rounded-2xl border border-white/30 bg-white/70 shadow-lg shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70 dark:shadow-black/30"
            : "max-w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Tanvir Rahman Logo"
              width={38}
              height={38}
              className="rounded-lg"
            />

            <span className="hidden font-semibold text-slate-900 dark:text-white sm:block">
              Tanvir Rahman
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-200 lg:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative transition ${
                      isActive
                        ? "text-blue-600 dark:text-purple-400"
                        : "hover:text-blue-600 dark:hover:text-purple-400"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Button className="h-10 rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-5 text-white shadow-md shadow-purple-500/20">
                <span>Download Resume</span>
                <Download className="ml-2 h-4 w-4 shrink-0" />
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-70">
                <div className="mt-10 flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-base font-medium text-slate-700 dark:text-slate-200"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}

                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="mt-4 w-full rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white">
                      Download Resume
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}