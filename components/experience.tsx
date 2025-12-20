"use client"

export default function Experience() {
  const experiences = [
    {
      title: "GIS Analyst | GIS Developer | AI Prompt Engineer",
      company: "Proforce Galaxies Limited",
      startDate: "August 2025",
      endDate: "Present",
      description: [
        "Developing advanced GIS solutions and applications for enterprise clients",
        "Building custom geospatial tools and web mapping applications",
        "Engineering AI prompts for geospatial data analysis and automation",
        "Integrating AI technologies with GIS workflows for enhanced efficiency",
        "Collaborating with cross-functional teams on innovative geospatial projects",
      ],
    },
    {
      title: "GIS Analyst",
      company: "Ovabor Labs (Remote)",
      startDate: "April 2023",
      endDate: "March 2025",
      description: [
        "Managed geospatial data from satellite imagery, drones, and field surveys",
        "Developed automated workflows using Python scripts to enhance efficiency",
        "Conducted LULC analysis and environmental impact assessments",
        "Contributed GIS expertise to InSAR data platform development",
        "Performed 3D terrain analysis including elevation modeling and watershed analysis",
        "Provided technical training and support to colleagues and clients",
      ],
    },
    {
      title: "GIS and Remote Sensing Analyst",
      company: "BLB GeoElectric Shore Consult Nigeria Limited",
      startDate: "January 2022",
      endDate: "March 2023",
      description: [
        "Provided GIS support for groundwater research and borehole drilling operations",
        "Conducted GIS analysis using Analytical Hierarchical Process (AHP) to model groundwater potential",
        "Participated in fieldwork collecting VES, electromagnetic, and well location data",
        "Processed spatial data to support site selection for borehole drilling",
        "Contributed to data management for Ph.D. research project",
      ],
    },
    {
      title: "Industrial Trainee",
      company: "Eagle's Orbit Spatial Solutions",
      startDate: "May 2021",
      endDate: "November 2021",
      description: [
        "Managed processing and analysis of satellite imagery for urban planning",
        "Analyzed 30+ satellite images to study water surface changes in Lake Chad",
        "Mentored 6 students on GIS concepts and tools",
        "Contributed to OpenStreetMap, increasing road network coverage by 10% in Oyo state",
        "Delivered comprehensive report on surface water monitoring using optical sensors",
      ],
    },
    {
      title: "GIS and Remote Sensing Intern",
      company: "Eagle's Orbit Spatial Solutions",
      startDate: "May 2020",
      endDate: "August 2020",
      description: [
        "Gained foundational experience in GIS and remote sensing principles",
        "Digitized map features and conducted image classification",
        "Processed data from KoboToolbox and ODK in multiple formats",
        "Developed comprehensive land cover map for Akure metropolis",
        "Created flood map for Hadejia, Jigawa state",
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
