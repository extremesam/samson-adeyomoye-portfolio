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
      <div className="min-h-screen bg-background pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight">Geospatial Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Exploring the boundaries of spatial data visualization and analysis through code and cartography.
            </p>
          </div>

          <div className="flex gap-3 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full transition-all text-sm font-bold tracking-wide border ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-background text-foreground/60 border-foreground/10 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat === "all" ? "All Endeavors" : cat === "30DaysMapChallenge" ? "#30DaysMapChallenge" : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-foreground/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-center"
                    >
                      {project.type === "live" ? "Launch Live" : "Explore Code"}
                    </a>
                    {project.github && project.type === "live" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-foreground/5 text-foreground rounded-xl text-xs font-bold hover:bg-foreground/10 transition-all"
                      >
                        Source
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
