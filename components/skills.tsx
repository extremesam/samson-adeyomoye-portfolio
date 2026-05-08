"use client"

import { Layers, Code2, Map, Database } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Remote Sensing & GIS",
      icon: <Layers className="w-6 h-6" />,
      items: [
        "Google Earth Engine, QGIS, ArcGIS Pro",
        "ENVI, Erdas Imagine, PCI Geomatica",
        "Satellite Imagery (Landsat, Sentinel, MODIS)",
        "LiDAR, Aerial Photography Processing",
      ],
    },
    {
      title: "Geospatial Development",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        "Python (NumPy, Pandas, Geopandas)",
        "JavaScript (Leaflet, Mapbox GL JS)",
        "PostGIS & Spatial Databases",
        "Mobile Data Collection (ODK, Kobo)",
      ],
    },
    {
      title: "Spatial Analysis",
      icon: <Map className="w-6 h-6" />,
      items: [
        "Image Classification (AI/ML based)",
        "Change Detection & LULC Mapping",
        "Network & Statistical Analysis",
        "3D Terrain Analysis & DEM",
      ],
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Geometric & Atmospheric Correction",
        "Mosaicking & Orthorectification",
        "GPS/GNSS Data Processing",
        "Technical Documentation",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Prowess</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining traditional GIS expertise with modern software development and AI to solve complex spatial problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
