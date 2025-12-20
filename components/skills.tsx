export default function Skills() {
  const skillCategories = [
    {
      title: "GIS & Remote Sensing",
      items: [
        "QGIS, ArcGIS Pro, SNAP, ENVI",
        "Google Earth Engine",
        "Satellite Imagery Analysis",
        "Cloud-Optimized GeoTIFFs (COGs)",
      ],
    },
    {
      title: "Programming & Development",
      items: [
        "Python, JavaScript, React",
        "Leaflet, CesiumJS, OpenLayers",
        "GeoServer, PostGIS, GDAL",
        "AI Prompt Engineering",
      ],
    },
    {
      title: "Data Science & Analysis",
      items: [
        "Raster & Vector Data Processing",
        "Spatial Statistics",
        "Machine Learning for Geospatial Data",
        "Terrain and Hydrological Modeling",
      ],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-start">
                  <span className="text-primary font-bold mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
