"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { DownloadCV } from "./download-cv"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "/showcase", label: "Showcase" },
    { href: "/articles", label: "Articles" },
    { href: "/certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur shadow-md py-2 px-8 dark:bg-background/95"
          : "bg-background/95 backdrop-blur py-4 px-8 dark:bg-background/95"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">SA</div>
        <ul className="flex gap-4 md:gap-8 flex-wrap justify-end items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground font-medium hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex gap-2 items-center ml-2 border-l border-border pl-4">
            <DownloadCV />
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
