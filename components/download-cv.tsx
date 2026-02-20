"use client"

import { useState } from "react"
import { FileText } from "lucide-react"

const CVTemplate = ({ data }: { data: any }) => (
  <div
    id="cv-pdf-template"
    className="bg-white text-black p-10 font-serif leading-snug w-[210mm] min-h-[297mm] absolute left-[-9999px] top-[-9999px]"
    style={{ color: "#000000" }}
  >
    {/* Header */}
    <header className="border-b-2 border-black pb-4 mb-6">
      <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">{data.name}</h1>
      <p className="text-lg font-semibold text-gray-800 mb-2">{data.title}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 italic">
        <span>{data.contact.email}</span>
        <span>{data.contact.phone}</span>
        <span>{data.contact.location}</span>
        <span>{data.contact.linkedin}</span>
        <span>{data.contact.github}</span>
      </div>
    </header>

    {/* Summary */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Professional Summary</h2>
      <p className="text-sm leading-relaxed">{data.summary}</p>
    </section>

    {/* Experience */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-300 mb-3 uppercase tracking-wide">
        Professional Experience
      </h2>
      <div className="space-y-4">
        {data.experience.map((exp: any, i: number) => (
          <div key={i} className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-base">{exp.title}</h3>
              <span className="text-sm italic text-gray-700">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>
            <p className="text-sm font-semibold text-gray-800 mb-1">{exp.company}</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {exp.description.map((bullet: string, j: number) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Skills */}
    <section className="mb-6">
      <h2 className="text-xl font-bold border-b border-gray-300 mb-3 uppercase tracking-wide">Technical Expertise</h2>
      <div className="grid grid-cols-1 gap-2">
        {data.skills.map((skill: any, i: number) => (
          <div key={i} className="text-sm">
            <span className="font-bold">{skill.title}:</span> {skill.items.join(", ")}
          </div>
        ))}
      </div>
    </section>

    {/* Certifications */}
    <section>
      <h2 className="text-xl font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Certifications</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm list-inside list-disc">
        {data.certifications.map((cert: any, i: number) => (
          <li key={i}>
            {cert.title} ({cert.issuer}, {cert.date})
          </li>
        ))}
      </ul>
    </section>
  </div>
)

export function DownloadCV() {
  const [isLoading, setIsLoading] = useState(false)

  const cvData = {
    name: "Samson Adeyomoye",
    title: "GIS Analyst | Geospatial Developer | Remote Sensing Specialist",
    summary:
      "I design and develop geospatial tools that transform complex data into meaningful insights. Passionate about blending GIS, Remote Sensing, and AI for smarter decision-making and efficient workflows.",
    contact: {
      email: "extremeadeyomoye@gmail.com",
      phone: "+2348107281262",
      location: "Ogun State, Nigeria",
      linkedin: "linkedin.com/in/samson-pfg",
      github: "github.com/extremesam",
    },
    experience: [
      {
        title: "GIS Analyst | GIS Developer | AI Prompt Engineer",
        company: "Proforce Galaxies Limited",
        startDate: "Aug 2025",
        endDate: "Present",
        description: [
          "Developing advanced GIS solutions and web mapping applications for enterprise clients.",
          "Engineering AI prompts for geospatial data analysis and automation.",
          "Integrating AI technologies with GIS workflows for enhanced efficiency.",
        ],
      },
      {
        title: "GIS Analyst",
        company: "Ovabor Labs (Remote)",
        startDate: "Apr 2023",
        endDate: "Mar 2025",
        description: [
          "Managed geospatial data from satellite imagery, drones, and field surveys.",
          "Developed automated workflows using Python scripts for LULC analysis.",
          "Performed 3D terrain analysis and environmental impact assessments.",
        ],
      },
      {
        title: "GIS and Remote Sensing Analyst",
        company: "BLB GeoElectric Shore Consult Nigeria Limited",
        startDate: "Jan 2022",
        endDate: "Mar 2023",
        description: [
          "Provided GIS support for groundwater research and borehole drilling operations.",
          "Modeled groundwater potential using Analytical Hierarchical Process (AHP).",
          "Processed spatial data to support site selection via electromagnetic data.",
        ],
      },
      {
        title: "Industrial Trainee",
        company: "Eagle's Orbit Spatial Solutions",
        startDate: "May 2021",
        endDate: "Nov 2021",
        description: [
          "Analyzed 30+ satellite images to study water surface changes in Lake Chad.",
          "Contributed to OpenStreetMap, increasing road network coverage by 10% in Oyo state.",
        ],
      },
    ],
    skills: [
      {
        title: "GIS & Remote Sensing",
        items: ["QGIS", "ArcGIS Pro", "SNAP", "ENVI", "Google Earth Engine", "Satellite Analysis"],
      },
      {
        title: "Development",
        items: ["Python", "JavaScript", "React", "CesiumJS", "Leaflet", "GeoServer", "PostGIS"],
      },
    ],
    certifications: [
      { title: "AI Implementation Series", issuer: "GSDC", date: "2024" },
      { title: "Scientific Computing with Python", issuer: "freeCodeCamp", date: "2024" },
      { title: "Professional Certification", issuer: "GSDC", date: "2024" },
    ],
  }

  const downloadPDF = async () => {
    setIsLoading(true)
    try {
      const { jsPDF } = await import("jspdf")
      const html2canvas = (await import("html2canvas")).default

      const element = document.getElementById("cv-pdf-template")
      if (!element) return

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const imgWidth = 210
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save("Samson_Adeyomoye_CV.pdf")
    } catch (error) {
      console.error("[v0] Error generating PDF:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <CVTemplate data={cvData} />
      <button
        onClick={downloadPDF}
        disabled={isLoading}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md active:scale-95 disabled:opacity-50"
      >
        <FileText className="w-4 h-4" />
        <span className="text-sm font-medium">{isLoading ? "Generating..." : "Download CV"}</span>
      </button>
    </>
  )
}
