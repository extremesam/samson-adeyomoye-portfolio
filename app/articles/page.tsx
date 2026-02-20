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
      title: "Unveiling the Ravages of Erosion in Southeastern Nigeria: A Historical Analysis",
      category: "GIS",
      description: "An article to understanding how GIS can help in tackling erosion in Southeastern Nigeria",
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
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Articles</h1>
            <p className="text-lg text-muted-foreground">Insights and explorations in geospatial technology</p>
          </div>

          <div className="flex gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full transition-all text-sm ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card hover:shadow-md"
                }`}
              >
                {cat === "all" ? "All Articles" : cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex gap-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{article.readTime} read</span>
                    </div>
                  </div>
                  <div className="text-2xl">→</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
