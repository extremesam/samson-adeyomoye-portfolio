"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { DownloadCV } from "./download-cv"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 px-6 md:px-12"
          : "py-6 px-6 md:px-12"
      }`}
    >
      <div className={`max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? "shadow-lg shadow-primary/5" : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-12 transition-transform">
            SA
          </div>
          <span className="hidden sm:block font-bold text-lg tracking-tight">SAMSON.GEO</span>
        </div>

        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <div className="hidden sm:block">
            <DownloadCV />
          </div>
          <ThemeToggle />
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 animate-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-semibold text-foreground/70 hover:text-primary block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-foreground/10">
              <DownloadCV />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
