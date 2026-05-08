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
    <section id="experience" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
            <p className="text-muted-foreground max-w-xl">
              A timeline of my contributions to the geospatial industry, from innovative SaaS development to environmental research.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-5xl font-bold text-primary/10">EXPERIENCE</div>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 relative group">
              <div className="md:text-right pt-2">
                <div className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{exp.startDate}</div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">{exp.endDate}</div>
                <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">
                  {calculateDuration(exp.startDate, exp.endDate)}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl group-hover:border-primary/30 transition-all duration-500 relative">
                <div className="absolute top-8 -left-3 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-lg font-semibold text-primary mb-6">{exp.company}</p>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-4">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
