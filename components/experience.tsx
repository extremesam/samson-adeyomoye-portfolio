"use client"

export default function Experience() {
  const experiences = [
    {
      title: "GIS Analyst | GIS Developer | SaaS",
      company: "Proforce Galaxies Limited, Ode-Remo",
      startDate: "August 2025",
      endDate: "Present",
      description: [
        "Pioneered the development of AI/ML/DL-based software for advanced Earth Observation (EO) and Satellite Image Analysis, driving novel insights for enterprise clients",
        "Engineered and deployed proprietary Logistics and Tracking software solutions, leveraging geospatial data to optimize supply chain efficiency and asset monitoring",
        "Designed and delivered technical training sessions and workshops, successfully onboarding clients on complex GIS, Remote Sensing software, and proprietary geospatial tools",
        "Spearheaded the integration of Generative AI and Prompt Engineering with geospatial workflows, automating complex data analysis tasks and significantly enhancing operational efficiency",
        "Collaborated with cross-functional teams within a SaaS environment to translate high-level business requirements into innovative, scalable geospatial products",
      ],
    },
    {
      title: "GIS Analyst | I.T | Geospatial | SaaS",
      company: "Ovabor Labs (Remote)",
      startDate: "April 2023",
      endDate: "March 2025",
      description: [
        "Geospatial Data Management - Collect, process, and investigate spatial data from various sources, including satellite imagery, drones, and surveys",
        "Developed high-quality maps, performed spatial analysis, and generated insights for decision-making",
        "Conducted image classification, change detection, and environmental monitoring using remote sensing techniques",
        "Contributed GIS expertise to the development of a platform for purchasing Interferometric Synthetic Aperture Radar (InSAR) data",
        "Developed Python scripts and GIS tools to automate workflows and enhance efficiency",
        "Performed elevation modeling, watershed analysis, and other 3D spatial analyses",
      ],
    },
    {
      title: "GIS and Remote Sensing Analyst",
      company: "BLB GeoElectric Shore Consult Nigeria Limited",
      startDate: "January 2022",
      endDate: "March 2023",
      description: [
        "Provided GIS and Remote Sensing support for groundwater research and borehole drilling operations",
        "Conducted GIS analysis using Analytical Hierarchical Process (AHP) in ArcGIS to model groundwater potential",
        "Participated in fieldwork, including the collection of VES (Vertical Electrical Sounding) data, electromagnetic data, and well location data",
        "Processed and analyzed spatial data to support site selection for borehole drilling",
        "Contributed to data management and organization for the owner's Ph.D. research project",
      ],
    },
    {
      title: "Industrial Trainee",
      company: "Eagle's Orbit Spatial Solutions",
      startDate: "May 2021",
      endDate: "November 2021",
      description: [
        "Honed advanced skills in remote sensing and GIS software and techniques (ArcGIS, QGIS, ENVI, Google Earth Engine, Mapbox)",
        "Independently managed the processing and analysis of satellite imagery for urban planning",
        "Investigated over 30 satellite images to analyse changes in open water surface extent and patterns in Lake Chad",
        "Mentored and trained six industrial training students on GIS concepts and tools",
        "Actively contributed to OpenStreetMap, resulting in a 10% increase in road network coverage in Oyo state",
      ],
    },
    {
      title: "GIS and Remote Sensing Intern",
      company: "Eagle's Orbit Spatial Solutions",
      startDate: "May 2020",
      endDate: "August 2020",
      description: [
        "Gained foundational experience in Geographic Information Systems (GIS) and remote sensing principles",
        "Assisted senior staff with data collection, processing, and analysis; digitized map features and conducted image classification",
        "Cleaned and processed data collected from KoboToolbox and ODK in XML, XLS, XLSX, CSV, and TXT formats",
        "Played a key role in developing a comprehensive land cover map for Akure metropolis",
        "Created flood map for Hadejia, Jigawa state, enhancing local environmental planning and disaster response efforts",
      ],
    },
  ]

  const calculateDuration = (startDate: string, endDate: string) => {
    const monthYear = (dateStr: string) => {
      if (dateStr === "Present") return new Date()
      const [month, year] = dateStr.split(" ")
      return new Date(`${month} 1, ${year}`)
    }

    const start = monthYear(startDate)
    const end = monthYear(endDate)
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
    }
    return `${years} year${years !== 1 ? "s" : ""}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}` : ""}`
  }

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-8 pb-8">
            <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-lg font-semibold text-foreground/90">{exp.company}</p>
                </div>
                <div className="text-right md:min-w-fit">
                  <p className="text-sm font-semibold text-foreground/70">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-xs font-semibold text-foreground/60 mt-2">
                    {calculateDuration(exp.startDate, exp.endDate)}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-foreground/85 text-base flex items-start leading-relaxed">
                    <span className="text-accent/60 font-bold mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
