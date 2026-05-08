"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ArticlesPage() {
  const [filter, setFilter] = useState("all")

  const articles = [
    {
      id: 1,
      title: "Introduction to GIS and Remote Sensing",
      category: "GIS",
      description: "A comprehensive guide to understanding GIS fundamentals and remote sensing concepts",
      url: "https://docs.google.com/document/d/1PDHn072-tzZ1RnXTq-gzCoeSweQKa2ei/edit?usp=sharing&ouid=113353938832850891830&rtpof=true&sd=true",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "Web Mapping with Open-Source Tools",
      category: "Web Development",
      description: "Exploring modern approaches to creating interactive web maps using open-source libraries",
      url: "https://docs.google.com/document/d/1crPjFZXeJkR97z5oSHleb5q0hI_NyMnPccWRRgbuZ_g/edit?usp=sharing",
      readTime: "10 min",
    },
    {
      id: 3,
      title: "Spatial Data Analysis Techniques",
      category: "Data Science",
      description: "Advanced techniques for analyzing and visualizing spatial data",
      url: "https://docs.google.com/document/d/1XMxoQH7SL6uhQsKXHZZuMmqLQmvCeIYkdhIePUiLaME/edit?usp=sharing",
      readTime: "12 min",
    },
    {
      id: 4,
      title: "Remote Sensing Applications in Environmental Monitoring",
      category: "Remote Sensing",
      description: "Practical applications of remote sensing for environmental monitoring and assessment",
      url: "https://docs.google.com/document/d/1w9cxZw1PRZJskcmy37H-BcmGgb0YLCTH5tHyUwygNbY/edit?usp=sharing",
      readTime: "9 min",
    },
  ]

  const categories = ["all", "GIS", "Web Development", "Data Science", "Remote Sensing"]
  const filteredArticles = filter === "all" ? articles : articles.filter((a) => a.category === filter)

  return (
    <main className="min-h-screen bg-background geo-grid selection:bg-primary/30">
      <Navigation />

      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
              Spatial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-emerald-400">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Explorations at the intersection of geography, data science, and technology.
              Documentation of my journey in geospatial analysis.
            </p>
          </div>

          <div className="flex gap-3 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all text-sm font-medium border ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground backdrop-blur-sm"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-2xl group relative overflow-hidden transition-all duration-500 hover:ring-2 hover:ring-primary/20"
              >
                <div className="flex justify-between items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold tracking-widest uppercase text-primary/70">
                        {article.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                  <div className="hidden md:flex w-14 h-14 rounded-full border border-border items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:translate-x-2">
                    <svg
                      className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
