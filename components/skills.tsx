export default function Skills() {
  const skillCategories = [
    {
      title: "Remote Sensing & GIS Software",
      items: [
        "Google Earth Engine, QGIS, ArcGIS Suite, ArcGIS Pro",
        "ENVI, Erdas Imagine, PCI Geomatica",
        "Satellite Imagery (Landsat, Sentinel, MODIS)",
        "LiDAR, Aerial Photography Processing",
      ],
    },
    {
      title: "Programming & Web Technologies",
      items: [
        "Python (NumPy, Pandas, Scripting, Automation)",
        "JavaScript (Google Earth Engine, Leaflet, Mapbox GL JS)",
        "HTML5 & CSS3 (Responsive Design, Flexbox, Grid)",
        "Mobile Data Collection (ODK, CAPI, Kobo Toolbox)",
      ],
    },
    {
      title: "Geospatial Analysis",
      items: [
        "Image Classification (Supervised, Unsupervised, Object-based)",
        "Change Detection & LULC Mapping",
        "Spatial Analysis (Buffer, Overlay, Network, Statistics)",
        "3D Analysis (DEM, Terrain, Visualization)",
      ],
    },
    {
      title: "Data Processing & Documentation",
      items: [
        "Geometric & Atmospheric Correction",
        "Radiometric Calibration, Mosaicking, Orthorectification",
        "GPS Data Collection & Processing",
        "Report Writing & Technical Documentation",
      ],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
