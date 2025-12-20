"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ShowcasePage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: "day1",
      title: "Day 1: Points of Interest",
      category: "30DaysMapChallenge",
      description: "Interactive map visualization of points of interest",
      image: "/map-points-of-interest.jpg",
      link: "https://samson-day1.vercel.app/",
      github: "https://github.com/extremesam/samson-day1",
      type: "live",
    },
    {
      id: "day2",
      title: "Day 2: Lines",
      category: "30DaysMapChallenge",
      description: "Beautiful line visualization and routing analysis",
      image: "/map-lines-routing.jpg",
      link: "https://github.com/extremesam/samson-day2",
      github: "https://github.com/extremesam/samson-day2",
      type: "github",
    },
    {
      id: "day3",
      title: "Day 3: Polygons",
      category: "30DaysMapChallenge",
      description: "Polygon mapping and spatial analysis visualization",
      image:
        "https://www.dropbox.com/scl/fi/hr3uu5svuzit24gqptori/Day3.png?rlkey=en6c4gsn72zjs6g3f8t5p5jfg&st=zp0t91kc&raw=1",
      link: "https://github.com/extremesam/samson-day3",
      github: "https://github.com/extremesam/samson-day3",
      type: "github",
    },
    {
      id: "day4",
      title: "Day 4: Hexagons",
      category: "30DaysMapChallenge",
      description: "Hexagonal binning and spatial aggregation",
      image:
        "https://www.dropbox.com/scl/fi/h2gxse4urqkcivbwvaotd/day4.png?rlkey=j6rzosofmng9sy959pjc5i9j1&st=10o7b0zi&raw=1",
      link: "https://github.com/extremesam/samson-day4",
      github: "https://github.com/extremesam/samson-day4",
      type: "github",
    },
    {
      id: "day5",
      title: "Day 5: Raster",
      category: "30DaysMapChallenge",
      description: "Raster data visualization and analysis",
      image: "/raster-data-analysis.jpg",
      link: "https://github.com/extremesam/samson-day5",
      github: "https://github.com/extremesam/samson-day5",
      type: "github",
    },
    {
      id: "day7-ndvi",
      title: "Day 7: NDVI Analysis",
      category: "30DaysMapChallenge",
      description: "Normalized Difference Vegetation Index visualization",
      image: "/vegetation-ndvi-analysis.jpg",
      link: "https://github.com/extremesam/samson-day7-ndvi",
      github: "https://github.com/extremesam/samson-day7-ndvi",
      type: "github",
    },
    {
      id: "day7-osm",
      title: "Day 7: OpenStreetMap",
      category: "30DaysMapChallenge",
      description: "OpenStreetMap data visualization and analysis",
      image: "/openstreetmap-osm.jpg",
      link: "https://github.com/extremesam/samson-day7-osm",
      github: "https://github.com/extremesam/samson-day7-osm",
      type: "github",
    },
    {
      id: "day8",
      title: "Day 8: Data Density",
      category: "30DaysMapChallenge",
      description: "Data density and heatmap visualization",
      image: "/heatmap-density-data.jpg",
      link: "https://github.com/extremesam/samson-day8",
      github: "https://github.com/extremesam/samson-day8",
      type: "github",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const categories = ["all", "30DaysMapChallenge", "Other Works"]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Showcase</h1>
            <p className="text-lg text-muted-foreground">
              A collection of my creative geospatial projects and explorations
            </p>
          </div>

          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card hover:shadow-md"
                }`}
              >
                {cat === "all" ? "All Projects" : cat === "30DaysMapChallenge" ? "#30DaysMapChallenge" : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition text-center"
                    >
                      {project.type === "live" ? "View Live" : "View Project"}
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 border border-border rounded text-sm hover:bg-card transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
